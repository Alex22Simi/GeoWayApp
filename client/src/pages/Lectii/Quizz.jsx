import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import "../Lectii/Quizz.css"

const Quizz = () => {
  const [final, setFinal] = useState(false)
  const { idCapitol, idxQuizz, din
  } = useParams();
  const [pasEvaluare, setPasEvaluare] = useState(false)
  const navigate = useNavigate();
  const capitol = LECTII.capitole.find((cap) => cap.id == idCapitol);
  const ultimul = capitol?.lectii?.length - 1 == idxQuizz
  // console.log(ultimul)
  const quizz = capitol.lectii[
    idxQuizz
  ];
  const [indecsiRaspunsuri, setIndecsiRaspunsuri] = useState(Array.from({ length: quizz.intrebari.length }, (_) => undefined))

  const calculPunctaj = () => {
    let punctaj = 0
    const punctajPerIntrebare = 100 / (quizz?.intrebari?.length || 1)
    quizz.intrebari.forEach((intrebare, idxIntrebare) => {
      if (intrebare.raspuns == indecsiRaspunsuri[idxIntrebare]) {
        punctaj += punctajPerIntrebare
      }
    });

    punctaj = Math.round(punctaj)
    return punctaj
  }

  const punctaj = calculPunctaj()
  console.log(location.pathname)


  const nextPas = () => {
    setPasEvaluare(true)
  }

  const handleNext = async () => {
    try {


      if (din == 'quizz') {
        navigate('/quizzuri')
        return
      }

      const payload = {
        unitate: capitol.unitate,
        indexCapitol: idCapitol,
        indexLectie: idxQuizz - 1,
        punctajQuizz: punctaj,
        finalizatQuizz: true,
        nume: capitol.lectii[
          idxQuizz - 1
        ].nume
      }


      const resultat = await fetch(`http://localhost:8080/progres/lectie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        }, body: JSON.stringify(payload)
      });
      if (resultat.ok) {

      }

    } catch (error) {
      console.error(error);
    }


    navigate(`/lectie/${idCapitol}/${+idxQuizz + 1}`)
  }

  return (
    <>
      <NavBar />
      {!pasEvaluare && <div className="examene-container">
        <h2 className="title">Quizz {capitol.nume}</h2>

        <div>
          {quizz.intrebari.map((intrebare, indexIntrebare) => {
            return (
              <div>
                <div className="cerinta">
                  {+indexIntrebare + 1}. {intrebare.continut}
                </div>
                {intrebare?.optiuni?.map((optiune, indexOptiune) => {
                  return (
                    <label>
                      <input
                        type="radio"
                        name={`rg-${indexIntrebare}`}
                        className="raspuns"
                        checked={indexOptiune == indecsiRaspunsuri[indexIntrebare]}
                        onChange={e => setIndecsiRaspunsuri(prev => {
                          const newRasp = [...prev]
                          newRasp[indexIntrebare] = indexOptiune
                          return newRasp
                        })}
                        id={`${indexIntrebare}~${indexOptiune}`}
                      />
                      {optiune}
                    </label>
                  );
                })}

              </div>
            );
          })}
          {!pasEvaluare && (
            <button className="quiz-btn" onClick={nextPas}>
              Trimite răspunsuri
            </button>
          )}

          {/* {pasEvaluare && (
            <div className="rezultat-box">
              <div className="rezultat-text">🎯 Punctaj obținut: <strong>{punctaj}</strong></div>
              <button className="quiz-btn" onClick={handleNext}>
                {din === 'quizz' ? '🏠 Către home' : '📘 Către următoarea lecție'}
              </button>
            </div>
          )} */}

        </div>
      </div>}
      {pasEvaluare && (
        <div className="rezultat-final">
          <div className="card-final">
            <h2>🎉 Felicitări! 🎉</h2>
            <p>
              Ai obținut <strong>{Math.round(punctaj / 10)} puncte</strong> la quizz!
            </p>
            {ultimul && <div>Felicitari! Ai terminat intregul capitol!</div>}
            <div className="butoane-final">
              <button onClick={() => navigate('/')}>
                🏠 Pagina principală
              </button>
              {!ultimul && <button onClick={handleNext}>
                {din == 'quizz' ? 'Catre quizzuri' : ' Către următoarea lecție'}
              </button>}
            </div>
          </div>
          <div className="confetti"></div>
        </div>
      )}
    </>
  );
};

export default Quizz;
