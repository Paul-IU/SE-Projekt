import React from "react";
import { useNavigate } from "react-router-dom";
import "./Datenschutz.css";

const Datenschutz = () => {
  const navigate = useNavigate();

  return (
    <div className="datenschutz-container container mt-5">
      <h1>Datenschutzerklärung</h1>
      <p><strong>Verantwortliche Stelle:</strong></p>
      <p>
        Max Mustermann <br />
        Musterstraße 123 <br />
        12345 Musterstadt <br />
        Deutschland <br />
      </p>

      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Diese
        Datenschutzerklärung informiert dich darüber, welche Daten wir erheben
        und wie wir sie nutzen.
      </p>

      <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>
        Bei Nutzung unserer App erfassen wir folgende Daten:
      </p>
      <ul>
        <li>Name und E-Mail-Adresse (bei Registrierung)</li>
        <li>Spielstatistiken (für Highscores und Fortschrittsspeicherung)</li>
        <li>Geräteinformationen (zur Verbesserung der Nutzererfahrung)</li>
      </ul>

      <h2>3. Verwendung der Daten</h2>
      <p>
        Wir nutzen deine Daten für folgende Zwecke:
      </p>
      <ul>
        <li>Personalisierung der Quiz-App</li>
        <li>Speicherung von Fortschritten und Ergebnissen</li>
        <li>Analyse zur Verbesserung der Benutzerfreundlichkeit</li>
      </ul>

      <h2>4. Weitergabe von Daten</h2>
      <p>
        Deine Daten werden **nicht** an Dritte weitergegeben, außer wenn es zur
        Einhaltung gesetzlicher Vorschriften erforderlich ist.
      </p>

      <h2>5. Deine Rechte</h2>
      <p>
        Du hast das Recht auf:
      </p>
      <ul>
        <li>Auskunft über gespeicherte Daten</li>
        <li>Löschung oder Korrektur deiner Daten</li>
        <li>Widerruf der Einwilligung zur Datenverarbeitung</li>
      </ul>

      <h2>6. Kontakt</h2>
      <p>
        Bei Fragen zum Datenschutz kannst du uns jederzeit kontaktieren: <br />
        E-Mail: datenschutz@quiz-app.de
      </p>

      <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default Datenschutz;
