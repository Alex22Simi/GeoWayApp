import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii";
import NavBar from "../../components/NavBar";
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
      <div className="examene-container">
        <h2 className="title">
          {capitol.nume} lectia {Math.round(+idxLectie / 2) + 1}
        </h2>
        <div>{lectie.continut}</div>
        {lectie.imagini.map((path, indexImg) => {
          return <img src={`${URL_API}/imagine/${path}`} />;
        })}
        <button onClick={() => handleNext()} style={{ marginTop: "10vh" }}>
          Catre quizz
        </button>
      </div>
    </>
  );
};

export default Lectie;
