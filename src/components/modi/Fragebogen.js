import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fragebogen.css";

const Fragebogen = () => {
  const navigate = useNavigate();
  const [fächer, setFächer] = useState([]);
  const [selectedFach, setSelectedFach] = useState(null);
  const [fragen, setFragen] = useState([]);
  const [selectedFrage, setSelectedFrage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFächer = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/fächer");
        if (!response.ok) throw new Error("Fehler beim Abrufen der Fächer");
        
        const data = await response.json();
        setFächer(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFächer();
  }, []);

  const handleFachAuswahl = async (fach) => {
    setSelectedFach(fach);
    setLoading(true);
    setSelectedFrage(null);

    try {
      const response = await fetch(`http://localhost:5000/api/fragen?fach=${encodeURIComponent(fach)}`);
      if (!response.ok) throw new Error("Fehler beim Abrufen der Fragen");
      
      const data = await response.json();
      setFragen(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fragebogen-container">
      <h2>📖 Fragebogen</h2>

      {/* Fach-Auswahl */}
      <div className="fach-liste">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          fächer.map((fach) => (
            <button
              key={fach}
              className={`fach-button ${selectedFach === fach ? "selected" : ""}`}
              onClick={() => handleFachAuswahl(fach)}
            >
              {fach}
            </button>
          ))
        )}
      </div>

      {/* Ladeanzeige */}
      {loading && <p className="loading">⏳ Lade Fragen...</p>}

      {/* Fragenliste */}
      {selectedFach && !loading && (
        <div className="fragen-liste">
          <h3>Fragen zu: {selectedFach}</h3>
          {fragen.map((frage, index) => (
            <button
              key={index}
              className={`frage-button ${selectedFrage === frage ? "selected" : ""}`}
              onClick={() => setSelectedFrage(frage)}
            >
              {frage.frage}
            </button>
          ))}
        </div>
      )}

      {/* Antworten */}
      {selectedFrage && (
        <div className="antworten-container">
          <h3>Frage: {selectedFrage.frage}</h3>
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`antwort ${num === selectedFrage.richtige_antwort ? "correct-border" : ""}`}
            >
              {selectedFrage[`antwort_${num}`]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fragebogen;
