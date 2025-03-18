import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const LOGOS = {
  logo: "/DinoGreenLogo.png",
  einzelspieler: "/DinoBlueLogo.png",
  vs: "/DinoRedLogo.png",
  kooperativ: "/DinoYellowLogo.png",
  fragebogen: "/DinopinkLogo.png"
};

const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFach, setSelectedFach] = useState("");

  const fächer = [
    "Einführung in das Internet of Things",
    "Ergonomie für die Web-Entwicklung"
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
        {[
          { name: "Einzelspieler", action: () => setShowPopup(true), logo: LOGOS.einzelspieler },
          { name: "Vs", path: "/vs", logo: LOGOS.vs },
          { name: "Kooperativ", path: "/kooperativ", logo: LOGOS.kooperativ },
          { name: "Fragebogen", path: "/fragebogen", logo: LOGOS.fragebogen }
        ].map((mode, index) => (
          <button 
            key={index}
            className="btn btn-outline-dark home-button d-flex flex-column align-items-center"
            onClick={mode.action ? mode.action : () => navigate(mode.path)}
          >
            <img src={mode.logo} alt={mode.name} className="home-button-logo" />
            {mode.name}
          </button>
        ))}
      </div>

      {/* Popup für Fächer-Auswahl */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Wähle ein Fach</h3>
            <select className="form-select mb-3" onChange={(e) => setSelectedFach(e.target.value)}>
              <option value="">-- Fach auswählen --</option>
              {fächer.map((fach, index) => (
                <option key={index} value={fach}>{fach}</option>
              ))}
            </select>
            <button className="btn btn-primary me-2" onClick={startEinzelspieler}>Starten</button>
            <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>Abbrechen</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
