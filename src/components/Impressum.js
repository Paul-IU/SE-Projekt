import React from "react";
import { useNavigate } from "react-router-dom";
import "./Impressum.css";
const Impressum = () => {
  const navigate = useNavigate();

  return (
    <div className="impressum-container mt-5">
      <h1>Impressum</h1>
      <p><strong>Angaben gemäß § 5 TMG:</strong></p>
      <p>
        Max Mustermann <br />
        Musterstraße 123 <br />
        12345 Musterstadt <br />
        Deutschland <br />
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 123 456789 <br />
        E-Mail: info@quiz-app.de
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
        dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. 
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
      </p>

      <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default Impressum;
