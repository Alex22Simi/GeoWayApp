import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import "./CereriElevi.css";

const CerereriElevi = ({ afisareNotificare }) => {
  const navigate = useNavigate();
  const [mesajEroare, setMesajEroare] = useState("");
  const [meniuLectie, setMeniuLectie] = useState(false);
  const [titlu, setTitlu] = useState("");
  const [cerere, setCerere] = useState("");
  const [data, setData] = useState("");
  const [mentorAles, setMentorAles] = useState(null);
  const [mesaje, setMesaje] = useState([]);
  const [statusCerere, setStatusCerere] = useState("acceptata");
  const raspunsPentru = useRef("");
  const dataLectie = useRef("");

  const getMesaje = async () => {
    try {
      const resultat = await fetch("http://localhost:8080/mesaje", {
        method: "GET",
        headers: {
          jwt: localStorage.getItem("jwt"),
        },
      });
      if (resultat.status == 401) {
        navigate("/login?redirectTo=elevi");
        return;
      }
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

  const trimiteMesaj = async () => {
    try {
      const resultat = await fetch("http://localhost:8080/mesaj", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          pentru: elevAles,
          // titlu,
          cerere,
          data,
          status: statusCerere,
          raspunsPentru: raspunsPentru.current,
        }),
      });
      const date = await resultat.json();
      if (resultat.ok) {
        afisareNotificare(date.mesaj, "succes");
        setTitlu("");
        setCerere("");
        setMesaje((prev) => {
          let newMesaje = [...prev];
          newMesaje = newMesaje.filter(
            (mesaj) => mesaj._id !== raspunsPentru.current
          );
          return newMesaje;
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
    getMesaje();
  }, []);

  const [mentori, setMentori] = useState([]);
  const [elevAles, setElevAles] = useState("");
  const [numeElev, setNumeElev] = useState("");

  const handleSolicitaLectie = (deLa, idMesaj, dataLec, numeElevAles) => {
    setElevAles(deLa);
    raspunsPentru.current = idMesaj;
    setData(dataLec);
    setNumeElev(numeElevAles);
    setMeniuLectie(true);
  };

  const handleTrimite = async () => {
    await trimiteMesaj();
  };

  return (
    <>
      <NavBar afisareNotificare={afisareNotificare} />
      {!meniuLectie && (
        <div className="examene-container">
          <h2 className="title">Mesaje de la elevi</h2>
          {mesajEroare && <div>{mesajEroare}</div>}
          <div className="examene-list">
            {mesaje?.map((mesaj, indexMesaj) => (
              <div key={indexMesaj} className="cerere-card">
                <h2>{mesaj?.titlu}</h2>
                <h2>{mesaj?.data}</h2>
                <h3>{mesaj?.cerere}</h3>

                <button
                  className="raspunde-button"
                  onClick={() =>
                    handleSolicitaLectie(
                      mesaj.deLa,
                      mesaj._id,
                      mesaj.data,
                      mesaj.deLaNume
                    )
                  }
                >
                  ✏️ Răspunde
                </button>
              </div>
            ))}
            {mesaje?.length == 0 && (
              <div>Momentan nu exista mesaje in asteptare</div>
            )}
          </div>
          <button className="back-button" onClick={() => navigate("/")}>
            Înapoi la Home
          </button>
        </div>
      )}
      {meniuLectie && (
        <div className="examene-container">
          <div className="message-form-container">
            <h2 className="title">Mesaj către {numeElev}</h2>

            {/* <label className="form-label">Titlu</label>
            <input
              className="form-input"
              value={titlu}
              onChange={(e) => setTitlu(e.target.value)}
            /> */}

            <label className="form-label">Cerere</label>
            <textarea
              rows={4}
              className="form-textarea"
              value={cerere}
              onChange={(e) => setCerere(e.target.value)}
            />

            <label className="form-label">Data dorită</label>
            <input
              type="date"
              className="form-input"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <label className="form-label">Status</label>

            <select
              className={`form-select ${
                statusCerere === "acceptata"
                  ? "select-success"
                  : statusCerere === "refuzata"
                  ? "select-danger"
                  : ""
              }`}
              value={statusCerere}
              onChange={(e) => setStatusCerere(e.target.value)}
            >
              <option value="acceptata">✅ Acceptă</option>
              <option value="refuzata">❌ Refuză</option>
            </select>

            <button className="back-button" onClick={handleTrimite}>
              Trimite
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CerereriElevi;
