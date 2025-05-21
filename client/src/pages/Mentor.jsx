import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import cosSvg from "../assets/cos.svg";

import "./Mentor.css";

const Mentor = ({ afisareNotificare }) => {
  const navigate = useNavigate();
  const [mesajEroare, setMesajEroare] = useState("");
  const [meniuLectie, setMeniuLectie] = useState(false);
  const [titlu, setTitlu] = useState("");
  const [cerere, setCerere] = useState("");
  const [data, setData] = useState("");
  const [mentorAles, setMentorAles] = useState(null);
  const [mesaje, setMesaje] = useState([]);

  const getMesaje = async () => {
    try {
      const resultat = await fetch("http://localhost:8080/mesaje/all", {
        method: "GET",
        headers: {
          jwt: localStorage.getItem("jwt"),
        },
      });
      if (resultat.ok) {
        const date = await resultat.json();

        setMesaje(date?.mesaje || []);
        console.log(date.mesaje);
        return;
      }

      setMesajEroare("Nu s-au putut prelua mesajele");
    } catch (error) {
      setMesajEroare("Nu s-au putut prelua mesajele");
    }
  };

  const getMentori = async () => {
    try {
      const resultat = await fetch("http://localhost:8080/mentori", {
        method: "GET",
        headers: {
          jwt: localStorage.getItem("jwt"),
        },
      });
      if (resultat.status == 401) {
        navigate("/login?redirectTo=mentor");
        return;
      }
      if (resultat.ok) {
        const date = await resultat.json();
        setMentori(date?.mentori || []);
        return;
      }

      setMesajEroare("Nu s-au putut prelua mentorii");
    } catch (error) {
      setMesajEroare("Nu s-au putut prelua mentorii");
    }
  };

  const trimiteMesaj = async () => {
    try {
      const resultat = await fetch("http://localhost:8080/mesaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          pentru: mentorAles.email,
          titlu,
          cerere,
          data,
        }),
      });
      const date = await resultat.json();
      if (resultat.ok) {
        afisareNotificare(date.mesaj, "succes");
        setTitlu("");
        setCerere("");
        setMentori((prev) => {
          let newMentori = [...prev];
          newMentori = newMentori.map((mentor) => {
            if (mentor.email == mentorAles.email) {
              mentor.status = "in asteptare";
            }
            return mentor;
          });
          return newMentori;
        });
        setMeniuLectie(false);
        return;
      }

      afisareNotificare(date.mesaj, "eroare");
    } catch (error) {
      console.error(error);
      afisareNotificare("Eroare in trimiterea mesajului", "eroare");
    }
  };

  const incarcaDate = async () => {
    await getMentori();
    getMesaje();
  };

  //DOM content loaded
  useEffect(() => {
    incarcaDate();
  }, []);

  const [mentori, setMentori] = useState([]);

  const handleSolicitaLectie = (mentor) => {
    setMentorAles(mentor);
    setMeniuLectie(true);
  };

  const handleTrimite = async () => {
    await trimiteMesaj();
  };

  const handleDelete = async (messageId) => {
    try {
      const resultat = await fetch(`http://localhost:8080/mesaj/${messageId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        },
      });
      const date = await resultat.json();
      if (resultat.ok) {
        afisareNotificare("Mesajul a fost sters!");
        setMesaje((mesajeAnterioare) => {
          const mesajeNoi = mesajeAnterioare.filter(
            (mesaj) => mesaj._id != messageId
          );
          return mesajeNoi;
        });
        return;
      }

      afisareNotificare(date?.mesaj || "Mesajul nu a putut fi sters", "eroare");
    } catch (error) {
      console.error(error);
      afisareNotificare("Mesajul nu a putut fi sters", "eroare");
    }
  };

  return (
    <>
      <NavBar afisareNotificare={afisareNotificare} />
      {!meniuLectie && (
        <div className="examene-container">
          <h2 className="title">Mentori</h2>
          {mesajEroare && <div>{mesajEroare}</div>}
          <div className="examene-list">
            {mentori?.map((mentor, indexMentor) => (
              <div key={indexMentor} className="exam-card">
                <h2 className="mentor-nume">{mentor?.nume}</h2>
                <h3>{mentor?.descriere}</h3>
                {mentor?.status != "in asteptare" ? (
                  <button
                    className="solicita-button"
                    onClick={() => handleSolicitaLectie(mentor)}
                  >
                    Solicită lecție
                  </button>
                ) : (
                  <span className="status-badge badge-pending">
                    Cerere în așteptare
                  </span>
                )}
              </div>
            ))}
          </div>

          <h2 className="title">Cereri de lecție soluționate</h2>
          <div className="examene-list">
            {mesaje?.map((mesaj, indexMesaj) => (
              <div key={indexMesaj} className="cerere-card">
                <img
                  src={cosSvg}
                  className="cos"
                  onClick={() => handleDelete(mesaj._id)}
                />
                <h2>{mesaj?.raspunsPentru?.titlu}</h2>
                <h2>{mesaj?.data}</h2>

                <h3>{mesaj?.cerere}</h3>
                <h3>De la : {mesaj?.deLaNume}</h3>
                <span
                  className={`status-badge ${
                    mesaj.status === "acceptata"
                      ? "badge-success"
                      : mesaj.status === "in asteptare"
                      ? "badge-pending"
                      : "badge-rejected"
                  }`}
                >
                  Cerere {mesaj.status}
                </span>
              </div>
            ))}
          </div>

          <button className="back-button" onClick={() => navigate("/")}>
            Înapoi la Home
          </button>
        </div>
      )}
      {meniuLectie && (
        <div className="examene-container">
          <div className="message-form-container">
            <h2>Mesaj către {mentorAles?.nume}</h2>
            <label>Titlu lecție</label>
            <input value={titlu} onChange={(e) => setTitlu(e.target.value)} />
            <label>Mesaj cerere</label>
            <textarea
              rows={4}
              value={cerere}
              onChange={(e) => setCerere(e.target.value)}
            />
            <label>Data dorită</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handleTrimite}>Trimite</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Mentor;
