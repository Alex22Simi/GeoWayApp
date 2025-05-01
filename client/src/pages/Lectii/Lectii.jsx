import { useNavigate } from "react-router-dom";
import { LECTII } from "./dateLectii.js";
import NavBar from "../../components/NavBar.jsx";

const Lectii = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="examene-container">
        <h2 className="title">Capitole lectii</h2>
        <div className="examene-list">
          {LECTII?.capitole?.map((capitol, indexCapitol) => {
            return (
              <div
                key={indexCapitol}
                onClick={() => navigate(`/capitol/${capitol.id}`)}
                className="exam-card"
              >
                <div>{capitol.nume}</div>
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

export default Lectii;
