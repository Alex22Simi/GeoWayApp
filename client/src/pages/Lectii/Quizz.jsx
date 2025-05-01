import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii";
import NavBar from "../../components/NavBar";

const Quizz = () => {
  const { idCapitol } = useParams();
  const navigate = useNavigate();
  const capitol = LECTII.capitole.find((cap) => cap.id == idCapitol);
  const quizz = capitol.quizz;

  return (
    <>
      <NavBar />
      <div className="examene-container">
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
                        id={`${indexIntrebare}~${indexOptiune}`}
                      />
                      {optiune}
                    </label>
                  );
                })}
                <button onClick={() => {}} style={{ marginTop: "10vh" }}>
                  Finalizeaza quizz
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Quizz;
