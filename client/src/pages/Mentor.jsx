import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Mentor = ({ afisareNotificare }) => {
  const navigate = useNavigate();
  const [mesajEroare, setMesajEroare] = useState("");
  const [meniuLectie, setMeniuLectie] = useState(false);
  const [titlu, setTitlu] = useState("");
  const [cerere, setCerere] = useState("");
  const [data, setData] = useState("");
  const [mentorAles, setMentorAles] = useState(null);

  const getMentori = async () => {
    try {
      const resultat = await fetch("http://localhost:8080/mentori", {
        method: "GET",
        headers: {
          jwt: localStorage.getItem("jwt"),
        },
      });
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

  //DOM content loaded
  useEffect(() => {
    getMentori();
  }, []);

  const [mentori, setMentori] = useState([]);

  const handleSolicitaLectie = (mentor) => {
    setMentorAles(mentor);
    setMeniuLectie(true);
  };

  const handleTrimite = async () => {
    await trimiteMesaj();
  };

  return (
    <>
      <NavBar />
      {!meniuLectie && (
        <div className="examene-container">
          <h2 className="title">Mentori</h2>
          {mesajEroare && <div>{mesajEroare}</div>}
          <div className="examene-list">
            {mentori?.map((mentor, indexMentor) => (
              <div key={indexMentor} className="exam-card">
                <h2>{mentor?.nume}</h2>
                <h3>{mentor?.descriere}</h3>
                {mentor?.status != "in asteptare" ? (
                  <button onClick={() => handleSolicitaLectie(mentor)}>
                    Solicita lectie
                  </button>
                ) : (
                  <span>Cerere in asteptare</span>
                )}
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
          <h2>Mesaj catre {mentorAles?.nume}</h2>
          <label>Titlu</label>
          <input value={titlu} onChange={(e) => setTitlu(e.target.value)} />
          <label>Cerere</label>
          <textarea
            value={cerere}
            onChange={(e) => setCerere(e.target.value)}
          />
          <label>Data dorita</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={handleTrimite}>Trimite</button>
        </div>
      )}
    </>
  );
};

export default Mentor;
