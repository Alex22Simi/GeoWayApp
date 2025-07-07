
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './EvolutiaMea.css';
import mapIcon from '../assets/map.svg';

const URL_API = "http://localhost:8080";

const EvolutiaMea = () => {
    const [progres, setProgres] = useState({});

    const fetchProgres = async () => {
        try {
            const res = await fetch(`${URL_API}/progres`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    jwt: localStorage.getItem("jwt"),
                },
            });
            if (res.ok) {
                const data = await res.json();
                setProgres(data.progres);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProgres();
    }, []);


    return (
        <div className="evolutie-container">
            <h2>Evoluția Mea</h2>

            <div className="progres-bar">
                <label>Progres General</label>
                <div className="bar">
                    <div className="fill" style={{ width: `${progres?.procentajProgres || 0}%` }}></div>
                </div>
                <span className="procent">{progres?.procentajProgres || 0} %</span>
            </div>

            <div className="grafice">
                <div>
                    <h4>Scoruri la Examene</h4>
                    <LineChart width={900} height={350} data={progres?.rezultateExamene} className='grafic'>
                        <XAxis
                            dataKey="nume"
                            stroke="#007c91"
                            tick={{ fontSize: 14, fontFamily: 'Segoe UI' }}
                        />
                        <YAxis
                            stroke="#007c91"
                            tick={{ fontSize: 14, fontFamily: 'Segoe UI' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#e0f7fa",
                                borderRadius: "8px",
                                border: "1px solid #00bcd4",
                                fontFamily: 'Segoe UI',
                                padding: "6px 12px",
                                fontSize: "0.8rem",
                            }}
                            labelStyle={{ color: "#007c91", fontWeight: "bold", fontSize: "0.8rem" }}
                            formatter={(value, name) => [`${value}`, name === "punctaj" ? "Punctaj" : "Scor"]}
                            labelFormatter={(label) => `📘 ${label}`}
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
                        <Line
                            type="monotone"
                            dataKey="punctaj" // ← AICI era greșeala, aveai punctajQuizz
                            stroke="#00bcd4"
                            strokeWidth={3}
                            dot={{ r: 6, stroke: "#e0f7fa", strokeWidth: 2 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </div>

                <div>
                    <h4>Scoruri la Quizz-uri</h4>
                    <LineChart width={900} height={350} data={progres?.quizzuri} className='grafic'>
                        <XAxis
                            dataKey="nume"
                            stroke="#007c91"
                            tick={{ fontSize: 14, fontFamily: 'Segoe UI' }}
                        />
                        <YAxis
                            stroke="#007c91"
                            tick={{ fontSize: 14, fontFamily: 'Segoe UI' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#e0f7fa",
                                borderRadius: "8px",
                                border: "1px solid #00bcd4",
                                fontFamily: 'Segoe UI',
                                padding: "6px 12px",
                                fontSize: "0.8rem",
                            }}
                            labelStyle={{ color: "#007c91", fontWeight: "bold", fontSize: "0.8rem" }}
                            formatter={(value, name) => [`${value}`, name === "punctaj" ? "Punctaj" : "Scor"]}
                            labelFormatter={(label) => `📘 ${label}`}
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
                        <Line
                            type="monotone"
                            dataKey="punctajQuizz"
                            stroke="#00bcd4"
                            strokeWidth={3}
                            dot={{ r: 6, stroke: "#e0f7fa", strokeWidth: 2 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </div>


            </div>

            <div className="sub-sectiuni">
                {/* Hărți finalizate */}
                <div className="harti">
                    <h4>Hărți Finalizate</h4>
                    <ul>
                        {progres?.hartiDinPrima?.map((h, i) => (
                            <li key={i}>
                                <div className="linie-harta">
                                    <img src={mapIcon} alt="map" className="map-icon" />
                                    <span>{h.nume.trim()}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Badge-uri */}
                <div className="badgeuri">
                    <h4>Badge-urile Tale</h4>
                    <div className="badge-lista">
                        {progres?.badgeuri?.map((b, i) => (
                            <div key={i} className="badge-card">
                                <img src={`${URL_API}/imagine/${b._id}.png`} alt={b.nume} />
                                <div className="tooltip">
                                    <strong>{b.nume}</strong>
                                    <p style={{ fontSize: "0.85rem" }}>{b.descriere}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EvolutiaMea;
