import { useNavigate } from "react-router-dom";
import "./Examene.css";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

const Examene = (props) => {
  const [examene, setExamene] = useState([]);
  const navigate = useNavigate();
  const [mesajEroare, setMesajEroare] = useState("");

  const getExamene = async () => {
    const resultat = await fetch("http://localhost:8080/examene", {
      method: "GET",
      headers: {
        jwt: localStorage.getItem("jwt"),
      },
    });
    if (resultat.status == 200) {
      const date = await resultat.json();
      setExamene(date);
    }
    if (resultat.status == 401) {
      setMesajEroare(
        "Pentru a putea rezolva acest examen este nevoie de autentificare!"
      );
    }
  };

  //DOM content loaded
  useEffect(() => {
    getExamene();
  }, []);

  return (
    <>
      <NavBar />
      <div className="examene-container">
        <h2 className="title">Examene din anii anteriori</h2>
        {mesajEroare && <div>{mesajEroare}</div>}
        <div className="examene-list">
          {examene.map((examen) => (
            <div key={examen.an} className="exam-card">
              <h3>An {examen.an}</h3>
              <div className="exam-dropdown">
                {examen.subiecte.map((element, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      navigate(`/examen/${examen.an}/${element.tip}`)
                    }
                  >
                    {element.nume}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="back-button" onClick={() => navigate("/")}>
          Înapoi la Home
        </button>
      </div>
    </>
  );
};

export default Examene;
