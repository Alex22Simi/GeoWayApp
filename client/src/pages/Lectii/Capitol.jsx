import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii.js";
import NavBar from "../../components/NavBar.jsx";
import lockSvg from '../../assets/lock.svg'

const Capitol = () => {
  const { idCapitol } = useParams();
  const lectii = JSON.parse(localStorage.getItem('lectii') || '{}')
  const navigate = useNavigate();
  const capitol = LECTII.capitole.find((cap) => cap.id == idCapitol);
  return (
    <>
      <NavBar />
      <div className="examene-container">
        <h2 className="title">{capitol.nume}</h2>
        <div className="examene-list">
          {capitol?.lectii.filter((el, filterIdx) => filterIdx % 2 == 0).map((lectie, indexLectie) => {
            console.log(lectie)
            //console.log(lectii[capitol.unitate])

            const indecsiLectii = lectii?.[capitol.unitate]?.lectii?.map(l => Math.round(l.indexLectie / 2)).sort()
            console.log(indecsiLectii)
            let ultimul = indecsiLectii ? indecsiLectii[indecsiLectii?.length - 1] : 'x'
            if (Number.isNaN(ultimul)) {
              ultimul = -1
            }

            console.log(ultimul)


            // const thisLectie = lectii?.[capitol.unitate]?.lectii?.find(l => l.indexCapitol == idCapitol && indexLectie == indexLectie*2)
            // const lectieAnterioara = indexLectie == 0 || (lectii?.[capitol.unitate]?.lectii?.find(l => l.indexCapitol == idCapitol && indexLectie == (indexLectie-1)*2))
            const prima = indexLectie == 0
            // const blocata =  indexLectie > ultimul 
            const dispo = prima || indexLectie <= ultimul + 1

            return (
              <div
                key={indexLectie}
                onClick={() => {

                  if (dispo) {
                    navigate(`/${lectie.tip}/${idCapitol}/${Math.round(indexLectie * 2)}`)
                  }

                }}
                className="exam-card"
                //Culoare in cazul in care e blocata lectia
                style={{ backgroundColor: !dispo ? 'gray' : '' }}
              >
                <div>Lecția {indexLectie + 1}</div>
                {/* {blocata && <div style={{color:"red"}}>blocata</div>} */}
                {!dispo && <img src={lockSvg} style={{ width: '50px' }} />}

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

export default Capitol;
