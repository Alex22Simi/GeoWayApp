import React from "react";
import "./Home.css";
import profileImg from "../assets/profile.jpg";
import instaSvg from "../assets/insta.svg";
import gmailSvg from "../assets/gmail.svg";
import logoSvg from "../assets/logo.svg";
import logo from "../../public/favicon.ico";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home({ afisareNotificare }) {
  return (
    <div>
      <NavBar afisareNotificare={afisareNotificare} />
      {/* Secțiunea Hero */}
      <div id="hero" className="container">
        <img src={logo} className="logo" alt="Logo" />
        <div className="mesaj-aplicatie">Bine ați venit!</div>
      </div>

      {/* Secțiunea Opțiuni */}
      <div id="options" className="container">
        <button className="buton-optiuni">Hartă capitale Europa</button>
        <button className="buton-optiuni">Hartă râuri Europa</button>
        <button className="buton-optiuni">Hartă județe România</button>
        <button className="buton-optiuni">Hartă forme de relief România</button>
        <button className="buton-optiuni">Hartă râuri România</button>
      </div>

      {/* Secțiunea Despre Mine */}
      <div id="despre-mine" className="container">
        <div className="sectiune-despre">
          <div className="despre-container">
            <img
              src={profileImg}
              className="despre-poza"
              alt="Profil Simionescu Alexandru"
            />
            <div className="text-despre">
              <h2>Despre Mine</h2>
              <p>
                Salut! Mă numesc Simionescu Alexandru și, la fel ca tine, am
                trecut prin emoțiile examenului de Bacalaureat. Am absolvit
                recent Facultatea de Cibernetică, Statistică și Informatică
                Economică, specializarea Informatică Economică, iar în clasa a
                XII-a am susținut și eu proba la Geografie, obținând nota 9,70.
              </p>
              <p>
                Pentru că știu cât de important este să ai materiale bine
                structurate și ușor de înțeles, am creat GeoWay – o platformă
                menită să te ajute să înveți mai eficient și să îți atingi
                obiectivele la acest examen. Aici vei găsi toate resursele care
                m-au ajutat și pe mine, hărți interactive și joculețe, toate
                acestea prezentate într-un mod clar și prietenos.
              </p>
              <p>
                Dacă ai întrebări sau nelămuriri despre o anumită lecție, nu
                ezita să scrii pe{" "}
                <a href="mailto:geoway2025@gmail.com">E-mail</a> sau{" "}
                <a href="https://www.instagram.com/geowayplatform/">
                  Instagram
                </a>
                .
              </p>
              <p className="urare">Mult succes! 🚀</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secțiunea Contact */}
      <div id="contact" className="container">
        <a
          href="https://www.instagram.com/geowayplatform/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaSvg} className="navbar-img" alt="Instagram" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=geoway2025@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmailSvg} className="navbar-img" alt="Gmail" />
        </a>
      </div>
    </div>
  );
}

export default Home;
