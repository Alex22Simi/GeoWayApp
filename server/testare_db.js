const Examen = require("./db/Models/Examen");

async function genereazaSiSalveazaExamene(mongoose) {
  try {
    // Parcurge anii de la 2018 la 2025
    for (let an = 2018; an <= 2025; an++) {
      // Creează un array cu 3 subiecte pentru fiecare an
      const subiecte = [0, 1, 2].map((id) => ({
        id: id,
        nume: `Subiect ${id}`,
        puncte: new Map([
          [
            "punct1",
            {
              intrebare: `Întrebare 1 pentru subiectul ${id}`,
              raspunsuri: ["Răspuns 1", "Răspuns 2"],
            },
          ],
          [
            "punct2",
            {
              intrebare: `Întrebare 2 pentru subiectul ${id}`,
              raspunsuri: ["Răspuns 3", "Răspuns 4"],
            },
          ],
        ]),
      }));

      // Creează un nou document Examen
      const examen = new Examen({
        id: 1,
        an: an,
        subiecte: subiecte,
      });

      // Salvează documentul în baza de date
      await examen.save();
      console.log(`Document salvat pentru anul ${an}`);
    }

    console.log("Toate documentele au fost salvate cu succes!");
  } catch (err) {
    console.error("Eroare la generarea sau salvarea documentelor:", err);
  }
}

module.exports = genereazaSiSalveazaExamene;
