import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-4">Seite nicht gefunden</h2>
      <p className="text-muted">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
        Zurück zur Startseite
      </button>
    </div>
  );
};

export default NotFound;
