import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Examen.css";
const URL_API = "http://localhost:8080";

//Codul pregătește componenta Examen pentru a prelua un examen de la
//server pe baza parametrilor din URL, salvează datele în stare
//dacă utilizatorul
//este autentificat, iar în caz contrar afișează un mesaj de eroare.
const Examen = (props) => {
  const { an, tip } = useParams();
  // console.log(an, tip);
  const [examen, setExamen] = useState(null);
  const navigate = useNavigate();
  const [mesajEroare, setMesajEroare] = useState("");
  const [final, setFinal] = useState(false);
  const [punctaj, setPunctaj] = useState(0);

  const getExamen = async () => {
    const resultat = await fetch(`${URL_API}/examen/${an}/${tip}`);
    if (resultat.status == 200) {
      const date = await resultat.json();
      setExamen(date);
      // console.log(date);
    }
    if (resultat.status == 401) {
      setMesajEroare(
        "Pentru a putea rezolva acest examen este nevoie de autentificare!"
      );
    }
  };

  const numarRoman = (index) => {
    index += 1;
    let nr = "";
    for (let i = 0; i < index; i++) {
      nr += "I";
    }
    return nr;
  };

  const indexToChar = (index) => {
    switch (index) {
      case 0:
        return "a";
        break;
      case 1:
        return "b";
        break;
      case 2:
        return "c";
        break;

      default:
        return "z";
        break;
    }
  };

  useEffect(() => {
    getExamen();
  }, []);

  const capturareRaspunsuri = () => {
    const raspunsuri = [];
    const toate = Array.from(document.getElementsByClassName("raspuns"));
    const radioGroups = new Set();
    toate.forEach((el) => {
      if (el.type === "radio") radioGroups.add(el.name);
    });

    toate.forEach((el) => {
      if (el.type === "text" || el.type === "number") {
        raspunsuri.push({
          id: el.id,
          val: el.value,
          type: el.type,
        });
      } else if (el.type === "checkbox" && el.checked) {
        raspunsuri.push({
          id: el.id,
          val: el.id.split("~").at(-1),
          type: el.type,
        });
      }
    });
    radioGroups.forEach((groupName) => {
      const selected = document.querySelector(
        `input[name="${groupName}"]:checked`
      );
      if (selected) {
        raspunsuri.push({
          id: selected.id,
          val: selected.id.split("~").at(-1),
          type: "radio",
        });
      }
    });

    console.log(raspunsuri);
    return raspunsuri;
  };

  const trimiteExamen = async () => {
    const raspunsuri = capturareRaspunsuri();
    const resultat = await fetch(`${URL_API}/barem/${an}/${tip}`, {
      method: "POST",
      headers: {
        jwt: localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raspunsuri }),
    });
    if (resultat.status == 200) {
      const date = await resultat.json();
      setPunctaj(date?.punctaj || 0);
      setFinal(true);
    }
  };

  return (
    <div className="examen-container" style={{ position: "relative" }}>
      {mesajEroare && <div>{mesajEroare}</div>}
      {!final && examen != null && (
        <>
          <h1>{examen.nume}</h1>
          <h1>{examen.info}</h1>
          {examen.puncte.map((subiect, indexSubiect) => {
            return (
              <div className="subiect" key={indexSubiect}>
                <div>Subiectul {numarRoman(indexSubiect)}</div>
                <img src={`${URL_API}/imagine/${subiect.imagine}`} />
                <div>{subiect.cerinta}</div>
                {subiect.subpuncte.map((subpunct) => {
                  return (
                    <div>
                      {Object.entries(subpunct).map(([litera, continut]) => {
                        return (
                          <div>
                            <div className="cerinta">
                              {litera}. {continut.cerinta}
                            </div>
                            {continut.imagine && (
                              <img
                                src={`${URL_API}/imagine/${continut.imagine}`}
                              />
                            )}
                            {continut?.intrebari?.map((intrebare, index) => {
                              const indexIntrebare = index + 1;
                              return (
                                <div>
                                  <div>
                                    {indexIntrebare}. {intrebare.intrebare}
                                  </div>
                                  {intrebare.tip == "completare" && (
                                    <div>
                                      <input
                                        id={`${intrebare.tip}~${indexSubiect}~${litera}~${indexIntrebare}`}
                                        className="raspuns"
                                        type="text"
                                      />
                                    </div>
                                  )}
                                  {intrebare.tip == "alegere" && (
                                    <div>
                                      {/* <div>RADIO</div> */}
                                      {intrebare?.optiuni?.map(
                                        (optiune, indexOptiune) => {
                                          return (
                                            <label>
                                              <input
                                                type="radio"
                                                name={`rg-${indexSubiect}~${indexIntrebare}~${litera}`}
                                                className="raspuns"
                                                id={`${intrebare.tip}~${indexSubiect}~${litera}~${indexIntrebare}~${optiune}`}
                                              />
                                              {optiune}
                                            </label>
                                          );
                                        }
                                      )}
                                    </div>
                                  )}
                                  {intrebare.tip == "alegere-speciala" && (
                                    <div>
                                      {/* <h1>XXXXXXXXXXXXXXXXXXX</h1> */}
                                      {/* <div>{JSON.stringify(intrebare)}</div> */}
                                      {intrebare.optiuni.map(
                                        (optiune, index) => {
                                          return (
                                            <div>
                                              <input
                                                type="checkbox"
                                                className="raspuns"
                                                id={`${intrebare.tip}~${indexSubiect}~${litera}~${indexIntrebare}~${optiune}`}
                                              />
                                              {optiune}
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <button onClick={trimiteExamen} className="trimite-button">
            Trimite examenul
          </button>
        </>
      )}
      {final && (
        <div className="rezultat-final">
          <div className="card-final">
            <h2>🎉 Felicitări! 🎉</h2>
            <p>
              Ai obținut <strong>{punctaj} puncte</strong> la examen!
            </p>
            <p>Ești gata pentru următoarea aventură geografică? 🗺️</p>
            <div className="butoane-final">
              <button onClick={() => navigate("/examene")}>
                🔁 Încearcă un nou test
              </button>
              <button onClick={() => navigate("/")}>
                🏠 Pagina principală
              </button>
            </div>
          </div>
          <div className="confetti"></div>
        </div>
      )}
    </div>
  );
};

export default Examen;
