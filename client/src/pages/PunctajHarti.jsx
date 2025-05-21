import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PunctajHarti.css";
import HartaRauriRomania from "../components/HartaRauriRomania";
import HartaJudeteRomania from "../components/HartaJudeteRomania";
import { HartaResedinteJudet } from "../components/HartaResedinteJudet.jsx";
import { HartaSubunitati } from "../components/HartaSubunitati.jsx";
import HartaTariEuropa from "../components/HartaTariEuropa.jsx";
import { HartaCapitaleEuropa } from "../components/HartaCapitaleEuropa.jsx";
import { HartaUnitatiRelief } from "../components/HartaUnitatiRelief.jsx";
import pingAudio from '../assets/ping.mp3'
const URL_API = "http://localhost:8080";


const PunctajHarti = ({
  numeHarta,
  obiecte,
  numeObiecte,
  numeObiect,
  excludeDinTitlu,
  substantivFeminin,
}) => {
  obiecte = obiecte.slice(0, 2); // pentru test, doar primele 2
  const [obiecteJoc, setObiecteJoc] = useState(obiecte);
  const [indexCurent, setIndexCurent] = useState(0);
  const [numeCurent, setNumeCurent] = useState(obiecteJoc[0].nume);
  const [mesajFinal, setMesajFinal] = useState(false);
  const [rapsunsGresit, setRaspunsGresit] = useState("");
  const punctajDinPrima = useRef(0);
  const dinPrima = useRef(true);
  const clickuri = useRef(0);

  const trimiteProgresHarta = async (numeHarta, dinPrima, unitate) => {
    try {
      const response =  fetch(`${URL_API}/progres/harta`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          jwt: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          numeHarta, dinPrima, unitate 
        }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  const audio = new Audio(pingAudio)

  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    clickuri.current = clickuri.current + 1;
    // console.log(e.target);
    if (id == obiecteJoc[indexCurent].id) {//rasp corect
      audio.play()
      e.target.classList.add("apasat");
      e.target.classList.remove("indiciu");
      e.target.classList.remove("neales");
      console.log(e.target.classList);
      if (e.target.classList.contains("mobil")) {
        e.target.classList.remove("apasat");
        e.target.classList.add("apasat-transparent");
      }
      if (dinPrima.current == true) {
        punctajDinPrima.current = punctajDinPrima.current + 1;
      }
      dinPrima.current = true;
      clickuri.current = 0;
      if (indexCurent + 1 == obiecteJoc.length) {
        // alert(`Ai ghicit ${punctajDinPrima.current} ${numeObiecte} din prima`);
        trimiteProgresHarta(numeHarta, punctajDinPrima.current == obiecteJoc.length,
          numeHarta.includes('europa') ? 'Europa': 'Romania'
         )
        setMesajFinal(true);
        return;
      }
      setIndexCurent((prev) => {
        setNumeCurent(obiecteJoc[prev + 1].nume);
        return prev + 1;
      });
    } else {
      dinPrima.current = false;
      const obiect = obiecte.find((obj) => obj.id == id);
      // alert(obiect.nume);
      // console.log(obiecte);
      if (clickuri.current >= 3) {
        const judete = Array.from(document.querySelectorAll(".desktop"));
        const judet = judete.find(
          (judet) => judet.id == obiecteJoc[indexCurent].id
        );
        // console.log("gasit :");
        console.log(judet);
        judet.classList.add("indiciu");
        judet.classList.remove('neales')
        console.log(judet.classList);
      }
      setRaspunsGresit(obiect?.nume);
      setTimeout(() => {
        setRaspunsGresit("");
      }, 5000);
    }
  };

  useEffect(() => {
    const tmp = obiecte.sort(() => Math.random() - 0.5);
    // console.log(tmp);
    setObiecteJoc(tmp);
    setNumeCurent(tmp[0].nume);
    //   document.querySelectorAll(".onClick").forEach((elem) => {
    //     elem.addEventListener("click", (e) => {
    //       handleClick(e);
    //     });
    //   });
  }, []);

  return (
    <div>
      {!mesajFinal && (
        <div>
          <div className="containerInfo">
            <h2 style={{ color: "#003366", marginBottom: "0.4rem" }}>
              🎯 Găsește {excludeDinTitlu ? '' : numeObiect}{' '}
              <span style={{ color: "#00bcd4" }}>{numeCurent}</span>!
            </h2>
            <p style={{ margin: 0 }}>
              🔍 Progres:{" "}
              <strong style={{ color: "#00bcd4" }}>{indexCurent}</strong> /{" "}
              {obiecte.length}
            </p>
            <p style={{ margin: 0 }}>
              ⭐ Răspunsuri din prima:{" "}
              <strong style={{ color: "#fbc02d" }}>
                {punctajDinPrima.current}
              </strong>
            </p>

            {!!rapsunsGresit && (
              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#ffebee",
                  color: "#c62828",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                ❌ Ups! Răspuns greșit – {numeObiect} {substantivFeminin ? 'aleasă' : 'ales'} de tine este{" "}
                <strong>{rapsunsGresit}</strong>.
              </div>
            )}
          </div>

          <div className="containerHarta">
            {numeHarta == "rauri-romania" && (
              <HartaRauriRomania handleClick={handleClick} />
            )}
            {numeHarta == "judete-romania" && (
              <HartaJudeteRomania handleClick={handleClick} />
            )}

            {numeHarta == "resedinte-judet" && (
              <HartaResedinteJudet handleClick={handleClick} />
            )}

            {numeHarta == "subunitati" && (
              <HartaSubunitati handleClick={handleClick} />
            )}

            {numeHarta == "tari-europa" && (
              <HartaTariEuropa handleClick={handleClick} />
            )}

            {numeHarta == "capitale-europa" && (
              <HartaCapitaleEuropa handleClick={handleClick} />
            )}
            {numeHarta == "unitati-relief" && (
              <HartaUnitatiRelief handleClick={handleClick} />
            )}
          </div>
        </div>
      )}

      {mesajFinal && (
        <div className="mesaj-final">
          <div className="emoji-final">🏆</div>
          <h2>Felicitări! Ai terminat harta! 🎉</h2>
          <p>
            Ai răspuns corect la <strong>{punctajDinPrima.current}</strong> din{" "}
            <strong>{obiecte.length}</strong> din prima încercare. Super tare!
            🚀
          </p>
          <div className="container-butoane">
            <button className="buton" onClick={() => navigate("/harti")}>
              📖 Către hărți
            </button>
            <button className="buton" onClick={() => navigate("/")}>
              🏠 Către acasă
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PunctajHarti;
