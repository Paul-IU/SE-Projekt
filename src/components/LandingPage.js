import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Importiere Navigation
import "./LandingPage.css"; // Importiere das CSS

const LOGO_DEFAULT = "/DinoGreenLogo.png";

const LandingPage = () => {
  const navigate = useNavigate(); // React Router Hook für Navigation
  const [logo, setLogo] = useState(LOGO_DEFAULT);

  return (
    <div className="landing-container d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
    {/* Home-Button (oben links) */}
    <button 
      className="btn btn-outline-dark rounded-circle position-absolute top-0 start-0 m-4 d-flex justify-content-center align-items-center"
      style={{ width: "45px", height: "45px", fontWeight: "bold", borderWidth: "3px", fontSize: "20px" }}
      onClick={() => navigate("/home")} // Zur Startseite navigieren
    >
      🏠
    </button>
      {/* Runder Info-Button oben rechts für Gastlogin*/}
      <button 
        className="btn btn-outline-dark rounded-circle position-absolute top-0 end-0 m-4 d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px", fontWeight: "bold", borderWidth: "3px", fontSize: 30}}
        onClick={() => alert("Gastlogin Daten: Gast@iu-study.org, Gast123?")}
      >
        i
      </button>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="logo position-absolute top-0 start-5 m-5 rounded-circle"
        width="250"
        height="250"
      />

      {/* Buttons für Login und Registrierung */}
      <div className="text-center">
        <button 
          className="btn btn-outline-dark btn-lg mb-4 landing-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <br />
        <button 
          className="btn btn-outline-dark btn-lg landing-button"
          onClick={() => navigate("/register")}
        >
          Registrieren
        </button>
      </div>

      {/* Impressum & Datenschutz Links */}
      <div className="position-absolute bottom-0 start-0 m-3">
        <a href="#" className="me-3 text-dark m-3">Impressum</a>
        <a href="#" className="text-dark m-3">Datenschutz</a>
      </div>
    </div>
  );
};

export default LandingPage;
