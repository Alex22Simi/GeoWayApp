import React, { useState } from "react";
import "./Login.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const URL_API = "http://localhost:8080";

const Login = ({ onLogin, afisareNotificare }) => {
  const query = new URLSearchParams(useLocation().search);
  // console.log(query.get("redirectTo"));
  const [isActive, setIsActive] = useState(false);
  const [nume, setNume] = useState("");
  const [elev, setElev] = useState(true);
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [parolaConfirm, setParolaConfirm] = useState("");
  const navigate = useNavigate();

  const [resetPage, setResetPage] = useState(false);
  const [resetResult, setResetResult] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [resetCode, setResetCode] = useState("");
  const [codeEntered, setCodeEntered] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${URL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          parola,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        afisareNotificare(data?.mesaj, "succes");
        if (data.jwt && data.userData) {
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("userData", JSON.stringify(data?.userData));
          onLogin();
        } else {
          afisareNotificare("Eroare autentifcare!", "eroare");
          return;
        }
        const redirectTo = query?.get("redirectTo") || "";
        navigate("/" + redirectTo);
      } else {
        afisareNotificare(data.mesaj, "eroare");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${URL_API}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nume,
          email,
          parola,
          parolaConfirm,
          elev,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        afisareNotificare(data?.mesaj);
        if (data.jwt && data.userData) {
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("userData", JSON.stringify(data?.userData));
          onLogin();
        } else {
          afisareNotificare("Eroare autentifcare!");
          return;
        }
        navigate("/");
      } else {
        afisareNotificare(data?.mesaj);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendPasswordResetCode = async () => {
    try {
      setResetResult("");
      const response = await fetch(`${URL_API}/send-reset-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.json();
      setResetResult(data.mesaj);
      if (response.ok) {
        setEmailSent(true);
        setCodeEntered(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleResetMenu = () => {
    setResetPage((prev) => !prev);
  };

  const verifyResetCode = async () => {
    try {
      setResetResult("");
      const response = await fetch(`${URL_API}/only-verify-reset-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          resetCode,
        }),
      });
      const data = await response.json();
      setResetResult(data.mesaj);
      if (response.ok) {
        setCodeEntered(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const storeNewPassword = async () => {
    try {
      setResetResult("");
      const response = await fetch(`${URL_API}/verify-reset-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          resetCode,
          parola,
          parolaConfirm,
        }),
      });
      const data = await response.json();
      setResetResult(data.mesaj);
      if (response.ok) {
        setTimeout(() => {
          setEmail("");
          setParola("");
          setResetPage(false);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCodeEntered = () => {
    verifyResetCode();
  };

  return (
    <div className="login-page">
      {!resetPage && (
        <div className={`login-container ${isActive ? "login-active" : ""}`}>
          {/* Formularul de înregistrare */}
          <div className="login-form-container login-sign-up">
            <form onSubmit={handleRegisterSubmit}>
              <h1>Creează un cont</h1>
              <span>
                Completează câmpurile de mai jos și începe să înveți geografie
                într-un mod distractiv!
              </span>
              <div className="login-radio-group">
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="elev"
                    checked={elev}
                    onChange={() => setElev(true)}
                  />
                  Elev
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="mentor"
                    checked={!elev}
                    onChange={() => setElev(false)}
                  />
                  Mentor
                </label>
              </div>
              <input
                type="text"
                placeholder="Nume și Prenume"
                value={nume}
                onChange={(e) => setNume(e.target.value)}
              />
              {/* <input type="text" placeholder="Username" /> */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Parolă"
                value={parola}
                onChange={(e) => setParola(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmare parolă"
                value={parolaConfirm}
                onChange={(e) => setParolaConfirm(e.target.value)}
              />
              <button onClick={handleRegisterSubmit}>Înscrie-te</button>
            </form>
          </div>

          {/* Formularul de login */}
          <div className="login-form-container login-sign-in">
            <form onSubmit={handleLoginSubmit}>
              <h1>Conectează-te</h1>
              <span>Intră în cont și învață geografie distrându-te</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Parolă"
                value={parola}
                onChange={(e) => setParola(e.target.value)}
              />
              <button onClick={toggleResetMenu}>Ai uitat parola?</button>
              <button onClick={handleLoginSubmit}>Conectează-te</button>
            </form>
          </div>

          {/* Panoul de comutare */}
          <div className="login-toggle-container">
            <div className="login-toggle">
              {/* Panoul pentru login */}
              <div className="login-toggle-panel login-toggle-left">
                <h1>Bine ai revenit!</h1>
                <span style={{ padding: "0 30px" }}>
                  Ai deja un cont? Apasă pe butonul de mai jos pentru a te
                  conecta!
                </span>
                <button className="login-hidden" onClick={handleToggle}>
                  Conectează-te
                </button>
              </div>

              {/* Panoul pentru înregistrare */}
              <div className="login-toggle-panel login-toggle-right">
                <h1>Bine ai venit!</h1>
                <p>
                  Nu ai încă un cont? <br /> Înscrie-te acum și începe aventura
                  ta geografică!
                </p>
                <button className="login-hidden" onClick={handleToggle}>
                  Înscrie-te
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {resetPage && (
        <div className="login-container reset-form">
          {!emailSent && (
            <>
              <div>Introdu adresa de e-mail:</div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
              <div>{resetResult}</div>
              <button onClick={sendPasswordResetCode}>
                Trimite codul de resetare a parolei
              </button>
              <button onClick={toggleResetMenu}>Inapoi</button>
            </>
          )}
          {emailSent && (
            <>
              {!codeEntered && (
                <>
                  <div>Introduceti codul primit pe mail :</div>
                  <input
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value)}
                  />
                  <div>{resetResult}</div>
                  <button
                    onClick={() => {
                      handleCodeEntered();
                    }}
                  >
                    Introducere cod
                  </button>
                </>
              )}
              {codeEntered && (
                <>
                  <div>{resetResult}</div>
                  <br />
                  <div>Introduceti noua parola : </div>
                  <input
                    value={parola}
                    onChange={(e) => setParola(e.target.value)}
                    type="password"
                  />
                  <input
                    value={parolaConfirm}
                    onChange={(e) => setParolaConfirm(e.target.value)}
                    type="password"
                  />
                  <button onClick={storeNewPassword}>Schimbare parola</button>
                  <button onClick={toggleResetMenu}>Inapoi</button>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
