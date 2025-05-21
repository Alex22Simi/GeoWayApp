import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./Harti.css";

const hartiRomania = [
  {
    titlu: "Hartă Județe România",
    poza: "harti|ro_judete-min.png",
    path: "/judete",
  },
  {
    titlu: "Hartă Râuri România",
    poza: "harti|ro_rauri-min.png",
    path: "/rauri/romania",
  },
  {
    titlu: "Hartă Reședințe",
    poza: "harti|ro_resedinte-min.png",
    path: "/resedinte-judet",
  },
  {
    titlu: "Hartă Unități de relief",
    poza: "harti|ro_unitati-min.png",
    path: "/unitati-relief",
  },
  {
    titlu: "Hartă Subunități de relief",
    poza: "harti|ro_subunitati-min.png",
    path: "/subunitati",
  },
];

const hartiEuropa = [
  {
    titlu: "Hartă Țări Europene",
    poza: "harti|europa_tari-min.png",
    path: "/tari-europa",
  },
  {
    titlu: "Hartă Capitale Europene",
    poza: "harti|europa_capitale-min.png",
    path: "/capitale-europa",
  },
];

const URL_API = "http://localhost:8080";

const Harti = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="examene-container">
        <h2 className="title">Hărți România</h2>
        <div className="examene-list">
          {hartiRomania.map((harta, index) => (
            <div
              key={index}
              className="exam-card"
              onClick={() => navigate(harta?.path || "/")}
            >
              <h3>{harta.titlu}</h3>
              <img src={`${URL_API}/imagine/${harta.poza}`} />
            </div>
          ))}
        </div>
        <h2 className="title">Hărți Europa</h2>
        <div className="examene-list">
          {hartiEuropa.map((harta, index) => (
            <div
              key={index}
              className="exam-card"
              onClick={() => navigate(harta?.path || "/")}
            >
              <h3>{harta.titlu}</h3>
              <img src={`${URL_API}/imagine/${harta.poza}`} />
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

export default Harti;
