const NR_LECTII = 20;
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { db } = require("./db/dbConnect.js");
const User = require("./db/Models/User.js");
const Examen = require("./db/Models/Examen.js");
const an2025 = require("./storage/2025.js");
const an2024 = require("./storage/2024.js");
const an2023 = require("./storage/2023.js");
const { verificareToken } = require("./middlewares.js");
const Mesaj = require("./db/Models/Mesaj.js");
const { default: mongoose } = require("mongoose");
const multer = require("multer");
const sharp = require("sharp");

const emailSchema = Joi.string().email().max(50).required().messages({
  "string.email": "Introdu o adresă de email validă!",
  "string.empty": "Adresa de email este obligatorie!",
  "any.requied": "Adresa de email este obligatorie!",
});

const passwordSchema = Joi.string()
  .pattern(/^[a-zA-Z0-9!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`-]*$/)
  .max(20)
  .required()
  .messages({
    "string.pattern.base":
      "Parola trebuie să conțină doar litere, cifre și caractere speciale, fara spații.",
    "any.requires": "Parola este obligatorie!",
  });

// RESTful
// verb + resursa URI
// GET /examene/2024/bac ->resursa
// POST /examen {}
// GET - select
// POST - insert
// PUT - update total
// PATCH - update pe bucati
// DELETE - delete/drop
app.use(cors());

app.use(express.json());

app.get("/hello", verificareToken, (req, res) => {
  return res.status(200).json("Hello!");
});

app.post("/hello", verificareToken, (req, res) => {
  // console.log(req.verificat);
  return res.status(200).json("Hello!");
});

app.get("/useri", async (req, res) => {
  const useri = await User.find();
  return res.status(200).json(useri);
});

app.get("/examen/:an/:tip", async (req, res) => {
  try {
    const an = req.params.an;
    const tip = req.params.tip;
    if (!an || !tip) {
      return res.status(400).json("Lipsesc parametrii!");
    }

    const examen = await Examen.findOne({
      an: an,
    }).select("-_id -an");
    const subiect = examen.subiecte.find(s => s?.tip == tip);
    return res.status(200).json(subiect);
  } catch (error) {
    return res.status(500).json([]);
  }
});

app.get("/examene", verificareToken, async (req, res) => {
  try {
    const examene = await Examen.find(
      {},
      {
        an: 1,
        "subiecte.nume": 1,
        "subiecte.tip": 1,
        _id: 0,
      }
    );
    return res.status(200).json(examene);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Eroare de server!");
  }
});

app.get("/imagine/:fileName", async (req, res) => {
  try {
    const fileName = req.params.fileName;
    if (!fileName) {
      return res.status(400).json("Lipseste parametrul de nume fișier!");
    }
    const edited = fileName.replace("|", "/");
    const caleFisier = path.join(__dirname, "img", edited);
    try {
      const fisier = fs.readFileSync(caleFisier);
      res.setHeader("Content-Type", "image/png");
      res.send(fisier);
    } catch (error) {
      return res.status(404).json("Fișierul nu există");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Eroare de server.");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { nume, email, parola, parolaConfirm, elev, codAcces } = req.body;
    // console.log(req.body);
    if (!nume || nume.length == 0) {
      // console.log(nume);
      return res.status(400).json({ mesaj: "Lipsește parametrul nume!" });
    }
    const { error: eroareMail } = emailSchema.validate(email);
    if (eroareMail) {
      return res.status(400).json({ mesaj: eroareMail.details[0].message });
    }
    if (!parola) {
      return res.status(400).json({ mesaj: "Lipsește parametrul parola!" });
    }
    if (parola !== parolaConfirm) {
      return res.status(400).json({ mesaj: "Parolele nu se potrivesc!" });
    }
    const { error: eroareParola } = passwordSchema.validate(parola);
    if (eroareParola) {
      return res.status(400).json({ mesaj: eroareParola.details[0].message });
    }
    if (elev == undefined || elev == null) {
      return res.status(400).json({ mesaj: "Lipsește parametrul elev!" });
    }


    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ mesaj: "Există deja un cont cu această adresă de email!" });
    }

    if (!elev && (!codAcces || codAcces != 'fucbvt6ho24837tl834th')) {
      return res.status(500).json({ mesaj: "Codul de acces nu este corect!" });
    }

    const salt = await bcrypt.genSalt(2);
    const pass_hash = await bcrypt.hash(parola, salt);
    const userInserat = new User({ email, pass_hash, nume, elev }).save();
    if (!userInserat) {
      return res.status(500).json({ mesaj: "Contul nu a putut fi creat" });
    }

    jwt.sign(
      { sub: email, elev, nume },
      JWT_SECRET_KEY,
      { expiresIn: "30d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ mesaj: "Contul nu a putut fi creat!" });
        }

        return res.status(200).json({
          mesaj: "Cont creat cu succes!",
          jwt: token,
          userData: { elev },
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Contul nu a putut fi creat!" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, parola } = req.body;
    const { error: eroareMail } = emailSchema.validate(email);
    if (eroareMail) {
      return res.status(400).json({ mesaj: eroareMail.details[0].message });
    }
    const { error: eroareParola } = passwordSchema.validate(parola);
    if (eroareParola) {
      return res.status(400).json({ mesaj: eroareParola.details[0].message });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ mesaj: "Nu există un cont cu această adresă de email!" });
    }
    const parolaCorecta = await bcrypt.compare(parola, user.pass_hash);
    if (!parolaCorecta) {
      return res.status(500).json({ mesaj: "Parola incorecta!" });
    }

    // console.log(user.name);
    jwt.sign(
      { sub: email, elev: user.elev, nume: user.nume },
      JWT_SECRET_KEY,
      { expiresIn: "30d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ mesaj: "Contul nu a putut fi creat!" });
        }

        return res.status(200).json({
          mesaj: "Autentificat cu succes!",
          jwt: token,
          userData: { elev: user.elev, calePoza: user.calePoza, nume: user.nume },
        });
      }
    );
  } catch (error) {
    return res.status(500).json({ mesaj: "Contul nu a putut fi creat" });
  }
});

app.get("/descriere", verificareToken, async (req, res) => {
  try {
    const { sub: email, elev } = req.verificat;
    if (elev) {
      return res
        .status(400)
        .json({ mesaj: "Un elev nu poate sa-si vada descrierea" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ mesaj: "Utilizator inexistent" });
    }

    return res.status(200).json({ descriere: user.descriere });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in preluarea descrierii" });
  }
});

app.put("/descriere", verificareToken, async (req, res) => {
  try {
    const { sub: email, elev } = req.verificat;
    if (elev) {
      return res
        .status(400)
        .json({ mesaj: "Un elev nu poate sa-si schimbe descrierea" });
    }
    const { descriere } = req.body;
    // console.log(req.body);
    if (!descriere || descriere.length == 0) {
      // console.log(nume);
      return res.status(400).json({ mesaj: "Lipsește parametrul descriere!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ mesaj: "Utilizator inexistent" });
    }
    user.descriere = descriere;
    await user.save();

    return res.status(200).json({ mesaj: "Descriere schimbata cu succes!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Contul nu a putut fi creat!" });
  }
});

app.put("/nume", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;

    const { nume } = req.body;
    if (!nume || nume.length == 0) {
      return res.status(400).json({ mesaj: "Lipsește parametrul nume!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ mesaj: "Utilizator inexistent" });
    }
    user.nume = nume;
    await user.save();

    return res.status(200).json({ mesaj: "Numele schimbata cu succes!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ mesaj: "Numele nu a putut fi schimbat cu succes!" });
  }
});

app.get("/nume", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ mesaj: "Utilizator inexistent" });
    }

    return res.status(200).json({ nume: user.nume });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in preluarea numelui" });
  }
});

app.get("/mentori", verificareToken, async (req, res) => {
  try {
    const mentori = await User.find(
      { elev: false },
      { nume: 1, descriere: 1, email: 1, _id: 0 }
    );
    if (!mentori) {
      return res.status(400).json({ mesaj: "Nu exista mentori" });
    }
    const mentoriPlusStatus = await Promise.all(
      mentori.map(async (mentor) => {
        const mesaje = await Mesaj.find({
          status: "in asteptare",
          pentru: mentor.email,
        });
        const mentorObj = mentor.toObject();
        if (mesaje?.length != 0) {
          mentorObj.status = "in asteptare";
        }
        return mentorObj;
      })
    );

    return res.status(200).json({ mentori: mentoriPlusStatus });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in preluarea descrierii" });
  }
});

app.post("/mesaj", verificareToken, async (req, res) => {
  try {
    const { sub: email, nume } = req.verificat;
    console.log(nume);
    const { titlu, cerere, data, pentru } = req.body;

    if (!titlu || !cerere || !data) {
      return res
        .status(400)
        .json({ mesaj: "Va rugam completati toate campurile" });
    }

    const mesajInserat = new Mesaj({
      deLa: email,
      pentru,
      titlu,
      cerere,
      deLaNume: nume,
      data,
      status: "in asteptare",
    }).save();
    if (!mesajInserat) {
      return res.status(500).json({ mesaj: "Mesajul nu a putut fi trimis" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_AUTH,
        pass: EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: EMAIL_AUTH,
      to: pentru,
      subject: "Cerere nouă de lecție",
      html: `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <title>Cerere nouă GeoWay</title>
  <style>
    body {
      background-color: #e0f7fa;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 0;
      margin: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      color: #00796b;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      color: #004d40;
    }
    .highlight {
      background-color: #00bcd4;
      color: white;
      font-size: 20px;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Salutare de la GeoWay! 🌍</h1>
    <p>Ai primit o cerere de lecție cu titlul:</p>
    <div class="highlight">${titlu}</div>
    <p>De la <strong>${nume}</strong></p>
    <p>Te rugăm să îți verifici secțiunea <a class="link-chat" href="http://localhost:5173/elevi">Chat cu elevii</a> din aplicație pentru a răspunde solicitării.</p>
    <div class="footer">
      Acest mesaj a fost generat automat. Te rugăm să nu răspunzi.
    </div>
  </div>
</body>
</html>
`,
    });

    return res.status(200).json({ mesaj: "Mesajul a fost trimis" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Mesajul nu a putut fi trimis" });
  }
});

app.put("/mesaj", verificareToken, async (req, res) => {
  try {
    const { sub: email, nume } = req.verificat;
    const { titlu, cerere, data, pentru, status, raspunsPentru } = req.body;

    if (!cerere || !data) {
      return res
        .status(400)
        .json({ mesaj: "Va rugam completati toate campurile" });
    }

    const mesajInserat = new Mesaj({
      deLa: email,
      pentru,
      deLaNume: nume,
      titlu: "",
      cerere,
      data,
      status,
      raspunsPentru,
    }).save();
    if (!mesajInserat) {
      return res.status(500).json({ mesaj: "Mesajul nu a putut fi trimis" });
    }
    let titluPrimaCere = "";
    if (raspunsPentru) {
      const mesaj = await Mesaj.findById(raspunsPentru);
      if (mesaj) {
        mesaj.status = status;
        titluPrimaCere = mesaj.titlu;
        await mesaj.save();
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_AUTH,
        pass: EMAIL_PASS,
      },
    });

    if (status == "acceptata") {
      const info = await transporter.sendMail({
        from: EMAIL_AUTH,
        to: pentru,
        subject: "Cerere acceptată",
        html: `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <title>Răspuns cerere GeoWay</title>
  <style>
    body {
      background-color: #e0f7fa;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 0;
      margin: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      color: #00796b;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      color: #004d40;
    }
    .highlight {
      background-color: #00bcd4;
      color: white;
      font-size: 20px;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: bold;
      display: inline-block;
      margin: 10px 0;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Salutare de la GeoWay! 🌍</h1>
    <p>Ai primit răspuns la solicitarea de lecție cu titlul:</p>
    <div class="highlight">${titluPrimaCere}</div>
    <p>De la <strong>${nume}</strong></p>
    <p>Te rugăm să îți verifici secțiunea <a class="link-chat" href="http://localhost:5173/mentor">Chat cu mentorii</a> din aplicație pentru a vedea răspunsul.</p>
    <div class="footer">
      Acest mesaj a fost generat automat. Te rugăm să nu răspunzi.
    </div>
  </div>
</body>
</html>
`,
      });
    } else {
      const info = await transporter.sendMail({
        from: EMAIL_AUTH,
        to: pentru,
        subject: "cerere respinsa",
        html: `
        <!DOCTYPE html>
        <html lang="ro">
        <head>
          <meta charset="UTF-8" />
          <title>Resetare parolă</title>
          <style>
            body {
              background-color: #e0f7fa;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              padding: 0;
              margin: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              padding: 40px;
              border-radius: 15px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              text-align: center;
              color: #00796b;
            }
            h1 {
              font-size: 24px;
              margin-bottom: 16px;
              color: #004d40;
            }
            p {
              font-size: 16px;
              margin-bottom: 24px;
            }
            .code {
              display: inline-block;
              background-color: #00bcd4;
              color: white;
              font-size: 22px;
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: bold;
              letter-spacing: 2px;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #999;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Salutare de la GeoWay! 🌍</h1>
            <p>Codul de resetare a parolei pentru contul tău este:</p>
            <div class="code">${titlu} pentru data ${data}</div>
            <div class="code">${cerere}</div>
            de la ${email}
            <p>Dacă nu ai solicitat acest cod, poți ignora acest mesaj.</p>
            <div class="footer">
              Acest mesaj a fost generat automat. Te rugăm să nu răspunzi.
            </div>
          </div>
        </body>
        </html>
        `,
      });
    }

    return res.status(200).json({ mesaj: "Mesajul a fost trimis" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Mesajul nu a putut fi trimis" });
  }
});

app.get("/mesaje", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const mesaje = await Mesaj.find({
      pentru: email,
      status: "in asteptare",
    });

    return res.status(200).json({ success: true, mesaje });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in preluarea mesajelor" });
  }
});

const storage = multer.memoryStorage();
const upload = multer({ storage });
const { v4 } = require("uuid");
const { calculZileConsecutive, calculBadgeuri } = require("./db/Models/progres.js");
const Badge = require("./db/Models/Badge.js");

app.put(
  "/poza",
  verificareToken,
  upload.single("poza_profil"),
  async (req, res) => {
    try {
      const { sub: email } = req.verificat;

      if (!req.file) {
        return res
          .status(400)
          .json({ error: true, mesaj: "Lipseste fisierul!" });
      }

      const imgBuffer = req.file.buffer;
      const resizedBuffer = await sharp(imgBuffer)
        .resize({
          width: 400,
          height: 400,
          fit: "cover",
        })
        .toBuffer();

      const uuid = v4();

      const user = await User.findOne({ email: email });
      const caleVeche = user.calePoza
      if (caleVeche) {
        fs.unlink(path.join(__dirname, "img-useri", `${caleVeche}.jpeg`), (err) => { })
      }

      fs.writeFileSync(
        path.join(__dirname, "img-useri", `${uuid}.jpeg`),
        resizedBuffer
      );

      user.calePoza = uuid;
      await user.save();

      return res.status(200).json({ success: true, calePoza: uuid });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesaj: "Eroare in preluarea mesajelor" });
    }
  }
);

app.delete(
  "/poza",
  verificareToken,
  async (req, res) => {
    try {
      const { sub: email } = req.verificat;

      const user = await User.findOne({ email: email });
      const caleVeche = user.calePoza
      if (caleVeche) {
        fs.unlink(path.join(__dirname, "img-useri", `${caleVeche}.jpeg`), (err) => { })
      }

      user.calePoza = null;
      await user.save();

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mesaj: "Eroare in stergerea pozei" });
    }
  }
);

app.get("/poza/:cale", async (req, res) => {
  try {
    // const { sub: email } = req.verificat;
    const { cale } = req.params;

    const caleImg = path.join(__dirname, "img-useri", `${cale}.jpeg`);
    if (!fs.existsSync(caleImg)) {
      return res.status(400).json({ error: true, mesaj: "Poza nu exista" });
    }

    const stream = fs.createReadStream(caleImg);
    res.setHeader("Content-Type", "image/jpeg");

    stream.pipe(res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in stergerea mesajului" });
  }
});

app.delete("/mesaj/:idMesaj", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const { idMesaj } = req.params;

    await Mesaj.findByIdAndDelete(idMesaj);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in stergerea mesajului" });
  }
});

app.get("/mesaje/all", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const mesaje = await Mesaj.find({
      pentru: email,
    }).populate("raspunsPentru", "titlu");
    // const mesajePrimite = await Mesaj.find({
    //   pentru: email,
    // });

    return res.status(200).json({ success: true, mesaje });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in preluarea mesajelor" });
  }
});

app.post("/barem/:an/:tip", verificareToken, async (req, res) => {
  try {
    //fiecare obiect de raspuns are {id, type, val}
    const { sub: email } = req.verificat;
    const { raspunsuri } = req.body;
    const an = req.params.an;
    const tip = req.params.tip;
    if (!an || !tip) {
      return res.status(400).json("Lipsesc parametrii!");
    }

    const examen = await Examen.findOne({
      an: an,
      "subiecte.tip": tip,
    }).select("-_id -an");
    const subiectExamen = examen.subiecte?.[0];
    // const subiectExamen = examen.subiecte.find(s => s?.tip == tip);
    if (!subiectExamen) {
      return res.status(400).json("Examenul nu exista!");
    }
    // console.log(subiectExamen);
    let punctaj = 10;
    raspunsuri.forEach((raspuns) => {
      //tip, subietc, litera, intrebare
      const { id, type, val } = raspuns;
      if (!val) {
        return;
      }
      // console.log(id, type, val);
      const [tipIntrebare, indexSubiect, idxLitera, idxIntrebare] =
        id.split("~");
      // console.log(
      //   `Sub ${
      //     +indexSubiect + 1
      //   }, litera ${idxLitera}, intreb ${idxIntrebare} de tip ${tipIntrebare} a fost rapsunsa cu ${val}`
      // );
      const subiect = subiectExamen.puncte[indexSubiect];
      const litera = JSON.parse(JSON.stringify(subiect.subpuncte))[0][
        idxLitera
      ];
      const intrebare = litera.intrebari[idxIntrebare - 1];
      // console.log(intrebare);
      if (tipIntrebare == "completare") {
        if (intrebare.raspunsuri.includes(val)) {
          punctaj += intrebare.punctaj;
        }
      }
      if (tipIntrebare == "alegere") {
        if (intrebare.raspunsuri.includes(val)) {
          punctaj += intrebare.punctaj;
        }
      }
      if (tipIntrebare == "alegere-speciala") {
        if (intrebare.raspunsuri.includes(val)) {
          // console.log("corect");
          punctaj += intrebare.punctaj;
        }
      }
    });

    const user = await User.findOne({ email })
    const examenUser = user.progres.examene.find(ex => ex.an == an && ex.tip == tip)
    if (examenUser) {
      if (examenUser.punctaj < punctaj) {
        examenUser.punctaj = punctaj
      }
    } else {
      user.progres.examene.push({ an, tip, punctaj })
    }
    await user.save()

    console.log(`${user.nume} a obținut ${punctaj} puncte`);

    return res.status(200).json({ punctaj });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Eroare de server!");
  }
});

const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_AUTH = process.env.EMAIL_AUTH;

app.post("/send-reset-code", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json("Lipseste parametrul de email!");
    }
    const { error: eroareMail } = emailSchema.validate(email);
    if (eroareMail) {
      return res.status(400).json({ mesaj: eroareMail.details[0].message });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_AUTH,
        pass: EMAIL_PASS,
      },
    });

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ mesaj: "Utilizatorul cu aceasta adresa de email nu exista!" });
    }
    const resetCode = Math.floor(100_000 + Math.random() * 900_000); //cod random de 6 cifre
    user.codResetare = {
      cod: resetCode,
      exp: new Date(Date.now() + 10 * 60_000),
    };
    await user.save();

    const info = await transporter.sendMail({
      from: EMAIL_AUTH,
      to: email,
      subject: "Cod resetare parola",
      html: `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <title>Resetare parolă</title>
  <style>
    body {
      background-color: #e0f7fa;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 0;
      margin: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      color: #00796b;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
      color: #004d40;
    }
    p {
      font-size: 16px;
      margin-bottom: 24px;
    }
    .code {
      display: inline-block;
      background-color: #00bcd4;
      color: white;
      font-size: 22px;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Salutare de la GeoWay! 🌍</h1>
    <p>Codul de resetare a parolei pentru contul tău este:</p>
    <div class="code">${resetCode}</div>
    <p>Dacă nu ai solicitat acest cod, poți ignora acest mesaj.</p>
    <div class="footer">
      Acest mesaj a fost generat automat. Te rugăm să nu răspunzi.
    </div>
  </div>
</body>
</html>
`,
    });
    return res.status(200).json({ mesaj: "Codul de resetare a fost trimis!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mesaj: "Eroare de server." });
  }
});

app.post("/only-verify-reset-code", async (req, res) => {
  try {
    const { email, resetCode } = req.body;
    if (!email) {
      return res.status(400).json("Lipseste parametrul de email!");
    }
    const { error: eroareMail } = emailSchema.validate(email);
    if (eroareMail) {
      return res.status(400).json({ mesaj: eroareMail.details[0].message });
    }
    if (!resetCode) {
      return res.status(400).json("Lipseste parametrul cod de resetare!");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ mesaj: "Utilizatorul cu aceasta adresa de email nu exista!" });
    }
    if (resetCode != user.codResetare.cod) {
      return res
        .status(400)
        .json({ mesaj: "Codul de resetare nu este corect!" });
    }
    if (user.codResetare.exp < new Date()) {
      return res.status(400).json({ mesaj: "Codul de resetare este expirat!" });
    }

    return res.status(200).json({ mesaj: "Codul este corect!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mesaj: "Eroare de server." });
  }
});

app.post("/verify-reset-code", async (req, res) => {
  try {
    const { email, resetCode, parola, parolaConfirm } = req.body;
    if (!email) {
      return res.status(400).json("Lipseste parametrul de email!");
    }
    const { error: eroareMail } = emailSchema.validate(email);
    if (eroareMail) {
      return res.status(400).json({ mesaj: eroareMail.details[0].message });
    }
    if (!resetCode) {
      return res.status(400).json("Lipseste parametrul cod de resetare!");
    }
    if (!parola || !parolaConfirm) {
      return res.status(400).json("Lipseste parametrul parola!");
    }
    const { error: eroareParola } = passwordSchema.validate(parola);
    if (eroareParola) {
      return res.status(400).json({ mesaj: eroareParola.details[0].message });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ mesaj: "Utilizatorul cu aceasta adresa de email nu exista!" });
    }
    if (resetCode != user.codResetare.cod) {
      return res
        .status(400)
        .json({ mesaj: "Codul de resetare nu este corect!" });
    }
    if (user.codResetare.exp < new Date()) {
      return res.status(400).json({ mesaj: "Codul de resetare este expirat!" });
    }
    const salt = await bcrypt.genSalt(2);
    const pass_hash = await bcrypt.hash(parola, salt);
    user.pass_hash = pass_hash;
    await user.save();

    return res
      .status(200)
      .json({ mesaj: "Parola a fost schimbata cu succes!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mesaj: "Eroare de server." });
  }
});

app.put("/progres/harta", verificareToken, async (req, res) => {
  try {
    const { numeHarta, dinPrima, unitate } = req.body
    const { sub: email } = req.verificat;
    const user = await User.findOne({ email });
    const hartaExistenta = user.progres.harti.filter((harta) => harta.nume == numeHarta)?.[0]
    if (dinPrima == true && hartaExistenta && hartaExistenta.faraGreseli != true) {
      hartaExistenta.faraGreseli = true
    }
    if (!hartaExistenta) {
      user.progres.harti.push({ nume: numeHarta, faraGreseli: dinPrima, unitate })
    }
    await user.save()

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in actualizarea progresului" });
  }
});


const harti = [
  {
    titlu: "Hartă Județe România",
    poza: "harti|ro_judete-min.png",
    path: "/judete-romania",
  },
  {
    titlu: "Hartă Râuri România",
    poza: "harti|ro_rauri-min.png",
    path: "/rauri-romania",
  },
  {
    titlu: "Hartă Reședințe",
    poza: "harti|ro_resedinte-min.png",
    path: "/resedinte-judet",
  },
  {
    titlu: "Hartă Unități de relief",
    poza: "harti|ro_unitati-min.png",
    path: "/unitati-relief",
  },
  {
    titlu: "Hartă Subunități de relief",
    poza: "harti|ro_subunitati-min.png",
    path: "/subunitati",
  },
  {
    titlu: "Hartă Țări Europene",
    poza: "harti|europa_tari-min.png",
    path: "/tari-europa",
  },
  {
    titlu: "Hartă Capitale Europene",
    poza: "harti|europa_capitale-min.png",
    path: "/capitale-europa",
  },
];


const calculProgres = async (user) => {
  const badgeuri = await Badge.find({ _id: { $in: user.progres.badgeuri } })
  return {
    rezultateExamene: user.progres.examene.map(ex => { return ({ nume: ex.tip.charAt(0).toUpperCase() + ex.tip.slice(1) + ' ' + ex.an, tip: ex.tip, an: ex.an, punctaj: ex.punctaj }) }),
    hartiFinalizate: user.progres.harti.map(harta => {
      const objHarta = harti.find(h => h.path.includes(harta.nume))
      return {
        faraGreseli: harta.faraGreseli,
        nume: objHarta.titlu,
        poza: objHarta.poza
      }
    }),
    hartiDinPrima: user.progres.harti.filter(h => h.faraGreseli == true).map(harta => {
      const objHarta = harti.find(h => h.path.includes(harta.nume))
      return {
        faraGreseli: harta.faraGreseli,
        nume: objHarta.titlu,
        poza: objHarta.poza
      }
    }),
    zileConsecutive: calculZileConsecutive(user?.progres?.accessLog || []),
    badgeuri,
    quizzuri: [...(user?.progres?.lectiiFinalizate?.romania?.lectii?.map(e => { return { punctajQuizz: e.punctajQuizz, nume: e.nume } }) || []), ...(user?.progres?.lectiiFinalizate?.europa?.lectii?.map(e => { return { punctajQuizz: e.punctajQuizz, nume: e.nume } }) || [])],
    procentajProgres: Math.round((100 / NR_LECTII) * ((user?.progres?.lectiiFinalizate?.romania?.lectii?.length || 0) + (user?.progres?.lectiiFinalizate?.europa?.lectii?.length || 0)))
  }
}

app.get("/progres", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const user = await User.findOne({ email });

    return res.status(200).json({ success: true, progres: await calculProgres(user) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in preluarea progresului" });
  }
});

app.post("/progres/aplicatie", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const user = await User.findOne({ email });
    const today = new Date().toLocaleDateString('en-CA', { timezone: 'Europe/Bucharest' })
    if (user?.progres?.accessLog && Array.isArray(user?.progres?.accessLog) && !user?.progres?.accessLog?.includes(today)) {
      user.progres.accessLog.push(today)
    }
    await calculBadgeuri(user)
    await user.save()

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in actualizarea progresului" });
  }
});

app.post("/progres/lectie", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const { unitate,
      indexCapitol,
      indexLectie,
      punctajQuizz,
      finalizatQuizz,
      nume
    } = req.body
    const user = await User.findOne({ email });
    const lectii = user?.progres?.lectiiFinalizate?.[unitate]?.lectii
    // console.log(lectii)
    // if (!lectii) {
    // user.progres.lectiiFinalizate[unitate].lectii = []
    // }
    const lectie = lectii?.find(l => l.indexCapitol == indexCapitol && l.indexLectie == indexLectie)
    if (lectie) {
      lectie.punctajQuizz = punctajQuizz
    } else {
      // console.log('negasita')
      if (!user.progres.lectiiFinalizate[unitate]) {
        user.progres.lectiiFinalizate[unitate] = {}
      }
      if (user?.progres?.lectiiFinalizate?.[unitate]?.lectii) {
        user.progres.lectiiFinalizate[unitate].lectii.push({
          indexCapitol,
          indexLectie,
          punctajQuizz,
          finalizatQuizz,
          nume
        })
      } else {
        console.log('3')
        user.progres.lectiiFinalizate[unitate].lectii = [{
          indexCapitol,
          indexLectie,
          punctajQuizz,
          finalizatQuizz,
          nume
        }]
      }

    }


    await user.save()

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in actualizarea progresului" });
  }
});

app.get("/progres/lectii", verificareToken, async (req, res) => {
  try {
    const { sub: email } = req.verificat;
    const user = await User.findOne({ email });

    return res.status(200).json({ success: true, lectii: user.progres.lectiiFinalizate });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mesaj: "Eroare in actualizarea progresului" });
  }
});




app.listen(8080, () => {
  // const examen2025 = new Examen(an2025);
  // const examen2024 = new Examen(an2024);
  // const examen2023 = new Examen(an2023);

  // examen2025.save();
  // examen2024.save();
  // examen2023.save();

  console.log("Server pornit pe portul 8080!");
});
