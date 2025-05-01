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

const PunctajHarti = ({ numeHarta, obiecte, numeObiecte, numeObiect }) => {
  obiecte = obiecte.slice(0, 2); // pentru test, doar primele 2
  const [obiecteJoc, setObiecteJoc] = useState(obiecte);
  const [indexCurent, setIndexCurent] = useState(0);
  const [numeCurent, setNumeCurent] = useState(obiecteJoc[0].nume);
  const [mesajFinal, setMesajFinal] = useState(false);
  const [rapsunsGresit, setRaspunsGresit] = useState("");
  const punctajDinPrima = useRef(0);
  const dinPrima = useRef(true);

  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    if (id == obiecteJoc[indexCurent].id) {
      if (dinPrima.current == true) {
        punctajDinPrima.current = punctajDinPrima.current + 1;
      }
      dinPrima.current = true;
      if (indexCurent + 1 == obiecteJoc.length) {
        // alert(`Ai ghicit ${punctajDinPrima.current} ${numeObiecte} din prima`);
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
      setRaspunsGresit(obiect?.nume);
      setTimeout(() => {
        setRaspunsGresit("");
      }, 5000);
    }
  };

  useEffect(() => {
    const tmp = obiecte.sort(() => Math.random() - 0.5);
    console.log(tmp);
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
            <div>
              Alegeti {numeObiect} {numeCurent}
            </div>
            <div>
              Ati parcurs {indexCurent} din {obiecte.length}
            </div>
            <div>Ati raspuns corect la {punctajDinPrima.current} din prima</div>
            {!!rapsunsGresit && (
              <div style={{ color: "red" }}>
                Raspuns gresit! Raul ales era : {rapsunsGresit}
              </div>
            )}
            {/* <div>are id-ul {}</div>
        <div>indexCurent {indexCurent}</div> */}
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
          <div>Felicitari!</div>
          <div>
            <div>Ati raspuns corect la {punctajDinPrima.current} din prima</div>
            <div className="container-butoane">
              <div className="buton" onClick={() => navigate("/harti")}>
                Catre harti
              </div>
              <div className="buton" onClick={() => navigate("/")}>
                Cate pagina principala
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PunctajHarti;
