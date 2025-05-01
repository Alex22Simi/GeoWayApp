import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii.js";
import NavBar from "../../components/NavBar.jsx";

const Capitol = () => {
  const { idCapitol } = useParams();
  const navigate = useNavigate();
  const capitol = LECTII.capitole.find((cap) => cap.id == idCapitol);
  return (
    <>
      <NavBar />
      <div className="examene-container">
        <h2 className="title">{capitol.nume}</h2>
        <div className="examene-list">
          {capitol?.lectii.map((lectie, indexLectie) => {
            return (
              <div
                key={indexLectie}
                onClick={() => navigate(`/lectie/${idCapitol}/${indexLectie}`)}
                className="exam-card"
              >
                <div>Lectia {indexLectie + 1}</div>
              </div>
            );
          })}
        </div>
        <button className="back-button" onClick={() => navigate("/")}>
          Înapoi la Home
        </button>
      </div>
    </>
  );
};

export default Capitol;
