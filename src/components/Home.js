import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const LOGOS = {
  logo: process.env.PUBLIC_URL + "/DinoGreenLogo.png",
  einzelspieler: process.env.PUBLIC_URL + "/DinoBlueLogo.png",
  einzelspielerOF: process.env.PUBLIC_URL + "/DinoBlueLogo.png",
  vs: process.env.PUBLIC_URL + "/DinoRedLogo.png",
  kooperativ: process.env.PUBLIC_URL + "/DinoYellowLogo.png",
  fragebogen: process.env.PUBLIC_URL + "/DinopinkLogo.png"
};

const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFach, setSelectedFach] = useState("");

  const fächer = [
    "Einfuehrung in das Internet of Things",
    "Ergonomie fuer die Web-Entwicklung"
  ];

  const startEinzelspieler = () => {
    if (selectedFach) {
      navigate(`/einzelspieler?fach=${encodeURIComponent(selectedFach)}`);
    } else {
      alert("Bitte wähle ein Fach aus!");
    }
  };

  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
      {/* Logo oben links */}
      <img
        src={LOGOS.logo}
        alt="Hauptlogo"
        className="position-absolute top-0 start-0 m-4 home-logo"
      />

      {/* Account-Button oben rechts */}
      <button
        className="btn btn-outline-dark rounded-circle position-absolute top-0 end-0 m-4 d-flex justify-content-center align-items-center"
        style={{ width: "40px", height: "40px", fontWeight: "bold", borderWidth: "3px", fontSize: 20 }}
        onClick={() => alert("Account-Optionen werden bald verfügbar sein!")}
      >
        👤
      </button>

      {/* Spielmodi mit individuellen Logos */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
        {/* Einzelspieler mit Fach-Auswahl */}
        <button 
          className="btn btn-outline-dark home-button d-flex flex-column align-items-center"
          onClick={() => setShowPopup(true)}
        >
          <img src={LOGOS.einzelspieler} alt="Einzelspieler" className="home-button-logo" />
          Einzelspieler
        </button>

        <button 
          className="btn btn-outline-dark home-button d-flex flex-column align-items-center"
          onClick={() => navigate("/vs")}
        >
          <img src={LOGOS.vs} alt="Vs" className="home-button-logo" />
          Vs
        </button>

        <button 
          className="btn btn-outline-dark home-button d-flex flex-column align-items-center"
          onClick={() => navigate("/kooperativ")}
        >
          <img src={LOGOS.kooperativ} alt="Kooperativ" className="home-button-logo" />
          Kooperativ
        </button>

        <button 
          className="btn btn-outline-dark home-button d-flex flex-column align-items-center"
          onClick={() => navigate("/fragebogen")}
        >
          <img src={LOGOS.fragebogen} alt="Fragebogen" className="home-button-logo" />
          Fragebogen
        </button>
      </div>

    {showPopup && (
      <div className="popup-overlay">
        <div className="popup">
          <h3>Wähle ein Fach</h3>
          
          {/* Liste der Fächer als klickbare Buttons */}
          <div className="fach-liste">
            {fächer.map((fach, index) => (
              <button 
                key={index} 
                className={`fach-button ${selectedFach === fach ? "selected" : ""}`} 
                onClick={() => setSelectedFach(fach)}
              >
                {fach}
              </button>
            ))}
          </div>

          <button className="btn btn-primary me-2" onClick={startEinzelspieler} disabled={!selectedFach}>
            Starten
          </button>
          <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
            Abbrechen
          </button>
        </div>
      </div>
    )}

    </div>
  );
};

export default Home;
