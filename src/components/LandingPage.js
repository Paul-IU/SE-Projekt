import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Importiere Navigation
import "./LandingPage.css"; // Importiere das CSS


const LOGO_DEFAULT = "/DinoGreenLogo.png"
const LOGO_BLINDFOLD = "/DinoGreenBlindfoldLogo.png"

const LandingPage = () => {
  const navigate = useNavigate(); // React Router Hook für Navigation
  const [logo, setLogo] = useState(LOGO_DEFAULT); 



  return (
    <div className="landing-container d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
      <img
        src={logo}
        alt="Logo"
        className="logo position-absolute top-0 start-5 m-5 rounded-circle"
        width="250"
        height="250"
      />
      <div className="text-center">
        <button 
          className="btn btn-outline-dark btn-lg mb-4 landing-button"
          onClick={() => navigate("/login")} // Navigiert zur Login-Seite
        >
          Login
        </button>
        <br />
        <button 
            className="btn btn-outline-dark btn-lg landing-button"
            onClick={() => navigate("/register")} // Jetzt führt es zur Registrierungsseite
        >
            Registrieren
        </button>

      </div>
      <div className="position-absolute bottom-0 start-0 m-3">
        <a href="#" className="me-3 text-dark m-3">Impressum</a>
        <a href="#" className="text-dark m-3">Datenschutz</a>
      </div>
    </div>
  );
};

export default LandingPage;
