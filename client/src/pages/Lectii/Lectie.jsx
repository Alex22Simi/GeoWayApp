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
    if (idxLectie != capitol.lectii.length - 1) {
      navigate(`/lectie/${idCapitol}/${+idxLectie + 1}`);
      return;
    }
    alert("Ai terminat capitolul! Urmeaza un quizz!");
    navigate(`/quizz/${idCapitol}`);
  };

  return (
    <>
      <NavBar />
      <div className="examene-container">
        <h2 className="title">
          {capitol.nume} lectia {+idxLectie + 1}
        </h2>
        <div>{lectie.continut}</div>
        {lectie.imagini.map((path, indexImg) => {
          return <img src={`${URL_API}/imagine/${path}`} />;
        })}
        <button onClick={() => handleNext()} style={{ marginTop: "10vh" }}>
          Urmatoarea lectie
        </button>
      </div>
    </>
  );
};

export default Lectie;
