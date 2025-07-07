import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii";
import NavBar from "../../components/NavBar";
import './Lectie.css';
const URL_API = "http://localhost:8080";

const Lectie = () => {
  const { idCapitol, idxLectie } = useParams();
  const capitol = LECTII.capitole.find((cap) => cap.id == idCapitol);
  const lectie = LECTII.capitole.find((cap) => cap.id == idCapitol).lectii[
    idxLectie
  ];
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/quizz/${idCapitol}/${+idxLectie + 1}/lectie`);
    return;
  };

  return (
    <>
      <NavBar />
      <div className="examene-container lectii-container">
        <h2 className="title">
          {capitol.nume} lecția {Math.round(+idxLectie / 2) + 1}
        </h2>
        {/* <div>{lectie.continut}</div> */}
        <div className="lectie-content" dangerouslySetInnerHTML={{ __html: lectie.continut }} />
        {lectie.imagini.map((path, indexImg) => {
          return <img src={`${URL_API}/imagine/${path}`} />;
        })}
        <button className="quiz-button" onClick={handleNext}>
          Către quizz
        </button>
      </div>
    </>
  );
};

export default Lectie;
