import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Examene from "./pages/Examene/Examene";
import Home from "./pages/Home";
import Examen from "./pages/Examen/Examen";
import Login from "./pages/Login";
import Notificare from "./components/Notifcare";
import RauriRomania from "./pages/RauriRomania";
import JudeteRomania from "./pages/JudeteRomania";
import ResedinteJudet from "./pages/ResedinteJudet";
import SubunitatiRomania from "./pages/SubunitatiRomania";
import TariEuropa from "./pages/TariEuropa";
import CapitaleEuropa from "./pages/CapitaleEuropa";
import UnitariRelief from "./pages/UnitariRelief";
import Harti from "./pages/Harti";
import Lectii from "./pages/Lectii/Lectii";
import Lectie from "./pages/Lectii/Lectie";
import Capitol from "./pages/Lectii/Capitol";
import Quizz from "./pages/Lectii/Quizz";
import Mentor from "./pages/Mentor";
import CereriElevi from "./pages/CereriElevi";

function App() {
  const [examene, setExamene] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [notificare, setNotificare] = useState(false);
  const [mesajNotificare, setMesajNotificare] = useState("");
  const [statusNotificare, setStatusNotificare] = useState("info");

  const afisareNotificare = (mesaj, status = "info") => {
    setMesajNotificare(mesaj);
    setNotificare(true);
    setStatusNotificare(status);
    setTimeout(() => {
      setNotificare(false);
      setStatusNotificare("info");
    }, 2000);
  };

  // Funcția ta existentă pentru a obține examenele

  // Funcție pentru a gestiona autentificarea
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Funcție pentru a gestiona delogarea
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Ruta pentru pagina principală */}
          <Route
            path="/"
            element={
              <Home
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
                afisareNotificare={afisareNotificare}
              />
            }
          />

          {/* Ruta pentru examene, protejată de autentificare */}
          <Route
            path="/examene"
            element={isAuthenticated ? <Examene /> : <Navigate to="/login" />}
          />

          {/* Ruta pentru un examen specific, protejată de autentificare */}
          <Route
            path="/examen/:an/:tip"
            element={isAuthenticated ? <Examen /> : <Navigate to="/login" />}
          />

          <Route path="/rauri/romania" element={<RauriRomania />} />
          <Route path="/judete" element={<JudeteRomania />} />
          <Route path="/resedinte-judet" element={<ResedinteJudet />} />
          <Route path="/subunitati" element={<SubunitatiRomania />} />
          <Route path="/tari-europa" element={<TariEuropa />} />
          <Route path="/capitale-europa" element={<CapitaleEuropa />} />
          <Route path="/unitati-relief" element={<UnitariRelief />} />

          <Route path="/harti" element={<Harti />} />
          <Route path="/lectii" element={<Lectii />} />
          <Route path="/lectie/:idCapitol/:idxLectie" element={<Lectie />} />
          <Route path="/capitol/:idCapitol" element={<Capitol />} />
          <Route path="/quizz/:idCapitol" element={<Quizz />} />

          {/* Pentru elevi */}
          <Route
            path="/mentor"
            element={<Mentor afisareNotificare={afisareNotificare} />}
          />

          {/* Pentru mentori */}
          <Route
            path="/elevi"
            element={<CereriElevi afisareNotificare={afisareNotificare} />}
          />

          {/* Ruta pentru login */}
          <Route
            path="/login"
            element={
              <Login
                onLogin={handleLogin}
                afisareNotificare={afisareNotificare}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {notificare && (
        <Notificare mesaj={mesajNotificare} status={statusNotificare} />
      )}
    </div>
  );
}

export default App;
