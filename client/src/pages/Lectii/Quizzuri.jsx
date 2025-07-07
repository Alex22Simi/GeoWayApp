import { useNavigate, useParams } from "react-router-dom";
import { LECTII } from "./dateLectii.js";
import NavBar from "../../components/NavBar.jsx";
import lockSvg from '../../assets/lock.svg'

const Quizzuri = () => {
    const { din } = useParams()
    const lectii = JSON.parse(localStorage.getItem('lectii') || '{}')
    const navigate = useNavigate();
    // const capitol = LECTII.capitole.find((cap) => cap.id == idCapitol);
    const quizzuri = [...LECTII.capitole[0].lectii.map(e => { return { ...e, idCapitol: 0 } }),
    ...LECTII.capitole[1].lectii.map(e => { return { ...e, idCapitol: 1 } })].filter((e, i) => e.tip == 'quizz')
    console.log(quizzuri)


    // return (<></>)
    return (
        <>
            <NavBar />
            <div className="examene-container">
                <h2 className="title">Quizzuri</h2>
                <div>Romania</div>
                <div className="examene-list">
                    {quizzuri.filter(q => q.idCapitol == 0).map((quizz, indexQuizz) => {
                        return (
                            <div
                                key={indexQuizz}
                                onClick={() => {
                                    navigate(`/quizz/${quizz.idCapitol}/${(+indexQuizz) * 2 + 1}/quizz`);
                                }}
                                className="exam-card"
                            >
                                <div>Quizz {(+indexQuizz) + 1}</div>

                            </div>
                        );
                    })}
                </div>

                <div>Europa</div>
                <div className="examene-list">
                    {quizzuri.filter(q => q.idCapitol == 1).map((quizz, indexQuizz) => {
                        return (
                            <div
                                key={indexQuizz}
                                onClick={() => {
                                    navigate(`/quizz/${quizz.idCapitol}/${(+indexQuizz) * 2 + 1}/quizz`);
                                }}
                                className="exam-card"
                            >
                                <div>Quizz {(+indexQuizz) + 1}</div>

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

export default Quizzuri;
