/*import { useState } from 'react';
import { useEffect } from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts'
const URL_API = "http://localhost:8080";

const data = [
    {nume: 'Bac 2024', punctaj : 70 },
    {nume: 'Simulare 2025', punctaj : 80 },
    {nume: 'Simulare 2023', punctaj : 60 },
    {nume: 'Simulare 2024', punctaj : 95 },
]

const procentajProgres = 50

const EvolutiaMea = () => {

    const [progres, setProgres] = useState({})

    const fetchProgres = async (today) => {
        try {
          const resultat = await fetch(`http://localhost:8080/progres`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              jwt: localStorage.getItem("jwt"),
            },
          });
          if(resultat.ok){
            const data = await resultat.json()
            setProgres(data.progres)
            console.log(data)
          }
    
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(()=>{
        fetchProgres()
      }, [])

    return (<div>

        <div>
            <label>Progresul meu</label>
            <div style={{display:'flex', gap:"12px"}}>
            <div style={{width:'80%'}}>
            <div style={{background: '#eee', borderRadius: '8px', width: '100%', height:'20px'}}>
                <div style={{background: 'rgb(36, 58, 144)', borderRadius: '8px', width: `${procentajProgres}%`, height:'20px'}}></div>
            </div>
            </div>
            <div>{procentajProgres}%</div>
            </div>


        </div>

        <div>
            <h3>Badge-urile mele:</h3>
            {progres?.badgeuri?.map((b, indexBadge)=>{
                return (
                    <div key={indexBadge}>
                        <label>{b?.nume}</label>
                        <div>{b?.descriere}</div>
                        <img src={`${URL_API}/imagine/${b._id}.png`} style={{width:'100px'}}/>
                    </div>
                )
            })}

        </div>

        <div>
            <h3>Harti finalizate din prima</h3>
            {progres?.hartiDinPrima?.map((harta, idxHarta)=>{
                return (
                    <div key={idxHarta}>
                        <div>{harta.nume}</div>
                    </div>
                )
            })}

        </div>

        <div>
            <label>Scoruri la examene</label>

            <LineChart width={500} height={500} data={progres?.rezultateExamene}>
                <XAxis dataKey={"nume"}/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid stroke="#eeffee"/>
                <Line type="monotone" dataKey='punctaj' stroke='rgb(0,0,230)'/>
            </LineChart>
        </div>

    </div>)
}

export default EvolutiaMea*/


import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './EvolutiaMea.css';

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
                        <XAxis dataKey="nume" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" />
                        <Line type="monotone" dataKey="punctaj" stroke="#00BFFF" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                </div>

                <div>
                    <h4>Scoruri la Quizz-uri</h4>
                    <LineChart width={900} height={350} data={progres?.quizzuri} className='grafic'>
                        <XAxis dataKey="nume" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" />
                        <Line type="monotone" dataKey="punctajQuizz" stroke="#00BFFF" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                </div>

            </div>

            <div className="sub-sectiuni">
                {/* Hărți finalizate */}
                <div className="harti">
                    <h4>Hărți Finalizate</h4>
                    <ul>
                        {progres?.hartiDinPrima?.map((h, i) => (
                            <li key={i}>✅ {h.nume}</li>
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
