import { useNavigate } from "react-router-dom";
import { LECTII } from "./dateLectii.js";
import NavBar from "../../components/NavBar.jsx";
import { useEffect } from "react";

const Lectii = () => {
  const navigate = useNavigate();

  //TODO de rezolvat race condition
  const fetchLectii = async () => {
    try {
      const resultat = await fetch(`http://localhost:8080/progres/lectii`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        }
      });
      if(resultat.ok){
        const data = await resultat.json()
        localStorage.setItem('lectii', JSON.stringify(data.lectii))
      }

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchLectii()
  }, [])

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
