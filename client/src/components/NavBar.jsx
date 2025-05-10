import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
import meniuSvg from "../assets/meniu.svg";
import setariSvg from "../assets/setari.svg";
import loginSvg from "../assets/login.svg";
import instaSvg from "../assets/insta.svg";
import gmailSvg from "../assets/gmail.svg";
import logoSvg from "../assets/logo.svg";
import userSvg from "../assets/user.svg";
import cancelSvg from "../assets/cancel.svg";
import "./NavBar.css";
const URL_API = "http://localhost:8080";

const TIPURI_MENIU = {
  NONE: 0,
  POZA: 1,
  PAROLA: 2,
  DESCRIERE: 3,
  NUME: 4,
};

const NavBar = ({ afisareNotificare }) => {
  const handleMeniu = async (tip) => {
    setTipMeniu(tip);
    try {
      if (tip == TIPURI_MENIU.DESCRIERE) {
        const response = await fetch(`${URL_API}/descriere`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            jwt: localStorage.getItem("jwt"),
          },
        });
        const data = await response.json();
        if (response.ok) {
          setDescriere(data?.descriere || "");
        } else {
          setDescriere("");
        }
      }
      if (tip == TIPURI_MENIU.NUME) {
        const response = await fetch(`${URL_API}/nume`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            jwt: localStorage.getItem("jwt"),
          },
        });
        const data = await response.json();
        if (response.ok) {
          setNume(data?.nume || "");
        } else {
          setNume("");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateDesc = async () => {
    try {
      const response = await fetch(`${URL_API}/descriere`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ descriere }),
      });
      const data = await response.json();
      if (response.ok) {
        afisareNotificare("Descriere schimbata cu succes!", "succes");
      } else {
        afisareNotificare("Eroare in schimbarea descrierii!", "eroare");
      }
    } catch (error) {
      console.error(error);
      afisareNotificare("Eroare in schimbarea descrierii!", "eroare");
    } finally {
      setTipMeniu(TIPURI_MENIU.NONE);
    }
  };

  const handleUpdateNume = async () => {
    try {
      const response = await fetch(`${URL_API}/nume`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ nume }),
      });
      const data = await response.json();
      if (response.ok) {
        afisareNotificare("Numele a fost schimbat cu succes!", "succes");
      } else {
        afisareNotificare("Eroare in schimbarea numelui!", "eroare");
      }
    } catch (error) {
      console.error(error);
      afisareNotificare("Eroare in schimbarea numelui!", "eroare");
    } finally {
      setTipMeniu(TIPURI_MENIU.NONE);
    }
  };

  const [userData, setUserData] = useState("userData");
  const [descriere, setDescriere] = useState("");
  const [nume, setNume] = useState("");
  const [tipMeniu, setTipMeniu] = useState(TIPURI_MENIU.NONE);
  useEffect(() => {
    const userDataLs = localStorage.getItem("userData");
    let json = {};
    try {
      json = JSON.parse(userDataLs);
    } catch (error) {
      json = {};
    }
    if (json && json.elev != undefined) {
      setUserData(json);
      console.log(json);
    }
  }, []);

  const [meniuAscuns, setMeniuAscuns] = useState(false);
  const [setariAscunse, setSetariAscunse] = useState(false);
  const meniuRef = useRef(null);
  const setariRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (meniuRef.current && !meniuRef.current.contains(event.target)) {
        setMeniuAscuns(false);
      }
      if (setariRef.current && !setariRef.current.contains(event.target)) {
        setSetariAscunse(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [meniuRef, setariRef]);

  return (
    <div>
      {tipMeniu != TIPURI_MENIU.NONE && (
        <div
          className="meniu-schimbari"
          onClick={(e) => {
            if (e.target == e.currentTarget) {
              setTipMeniu(TIPURI_MENIU.NONE);
            }
          }}
        >
          <div className="meniu-main">
            {tipMeniu == TIPURI_MENIU.DESCRIERE && (
              <>
                <label>Descriere: </label>
                <input
                  type="text"
                  value={descriere}
                  onChange={(e) => setDescriere(e.target.value)}
                />
                <button onClick={handleUpdateDesc}>
                  Acutalizeaza descrierea
                </button>
              </>
            )}

            {tipMeniu == TIPURI_MENIU.NUME && (
              <>
                <label>Nume nou : </label>
                <input
                  type="text"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
                />
                <button onClick={handleUpdateNume}>Acutalizeaza numele</button>
              </>
            )}
          </div>
        </div>
      )}
      <div id="navbar" className="container">
        <img
          src={meniuSvg}
          className="navbar-img"
          onClick={() => setMeniuAscuns(!meniuAscuns)}
          alt="Meniu"
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            src={loginSvg}
            className="navbar-img"
            onClick={() => navigate("/login")}
            alt="Login"
          />
          <img
            src={setariSvg}
            className="navbar-img"
            onClick={() => setSetariAscunse(!setariAscunse)}
            alt="Setări"
          />
        </div>
      </div>
      {/* Meniuri laterale */}
      <div
        id="meniu"
        className={`meniu ${meniuAscuns ? "deschis" : "ascuns"}`}
        ref={meniuRef}
      >
        <button
          className="buton-inchidere"
          onClick={() => setMeniuAscuns(false)}
        >
          <img src={cancelSvg} alt="Închide" className="icon-inchidere" />
        </button>
        <div className="profil-meniu">
          <img src={userSvg} width={60} className="user-icon" alt="Profil" />
          <div className="profil-info">
            <div className="text-profil">Ion Popescu</div>
            <div className="text-profil">65% completat</div>
          </div>
        </div>
        <div className="buton-meniu" onClick={() => navigate("/lectii")}>
          Lecții
        </div>
        <div className="buton-meniu" onClick={() => navigate("/harti")}>
          Hărți
        </div>
        <div className="buton-meniu">Quizzuri</div>
        <div className="buton-meniu" onClick={() => navigate("/examene")}>
          Examene anterioare
        </div>
        <div
          className="buton-meniu"
          onClick={() =>
            navigate(
              userData.elev != undefined
                ? userData.elev === true
                  ? "/mentor"
                  : "/elevi"
                : "/mentor"
            )
          }
        >
          Chat cu{" "}
          {userData.elev != undefined
            ? userData.elev === true
              ? "mentorul"
              : "elevii"
            : "mentorul"}
        </div>
        <div className="buton-meniu">Jocuri</div>
        <div className="buton-meniu">Evoluția mea</div>
      </div>

      <div
        id="setari"
        className={`setari ${setariAscunse ? "deschis" : "ascuns"}`}
        ref={setariRef}
      >
        <button
          className="buton-inchidere"
          onClick={() => setSetariAscunse(false)}
        >
          <img src={cancelSvg} alt="Închide" className="icon-inchidere" />
        </button>
        <button
          className="buton-meniu"
          onClick={() => handleMeniu(TIPURI_MENIU.NUME)}
        >
          Actualizare nume
        </button>
        <button className="buton-meniu">Actualizare poză profil</button>
        <button className="buton-meniu">Schimbare parolă</button>
        {userData.elev}
        {userData?.elev == false && (
          <button
            className="buton-meniu"
            onClick={() => handleMeniu(TIPURI_MENIU.DESCRIERE)}
          >
            Actualizare descriere
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
