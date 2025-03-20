import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; 
import axios from "axios";



const LOGO_DEFAULT = "/DinoGreenLogo.png"
const LOGO_BLINDFOLD = "/DinoGreenBlindfoldLogo.png"


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logo, setLogo] = useState(LOGO_DEFAULT)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handlePasswordFocus = () => {
    setLogo(LOGO_BLINDFOLD);
  };
  const handlePasswordBlur = () => {
    setLogo(LOGO_DEFAULT)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(""); 

    // Email klein schreiben, um case-sensitivity zu vermeiden //
    const formattedEmail = email.toLowerCase();

    if (password !== confirmPassword) {
      setError("Die Passwörter stimmen nicht überein!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email: formattedEmail, 
        passwort: password, 
      });

      setSuccess(response.data.message);
      setTimeout(() => navigate("/login"), 2000); // Nach erfolgreicher Registrierung zum Login weiterleiten
    } catch (err) {
      setError(err.response?.data?.error || "Registrierung fehlgeschlagen, Server nicht erreichbar.");
    }
  };
  
  return (
    <div className="register-container d-flex justify-content-center align-items-center vh-100">
        <img
        src={logo}
        alt="Logo"
        className="register-logo position-absolute top-0 start-5 m-5 rounded-circle"
        onClick={() => navigate("/")}
      />
      <div className="register-box p-4 shadow-lg">
        <h2 className="text-center mb-4">Registrieren</h2>
        
        {/* Erfolg- oder Fehlermeldung anzeigen */}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Gib deine E-Mail ein"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Passwort</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Gib dein Passwort ein"
              value={password}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Passwort bestätigen</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Passwort wiederholen"
              value={confirmPassword}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Registrieren</button>
        </form>
        <p className="text-center mt-3">
          Schon ein Konto? <span className="text-primary" style={{cursor: "pointer"}} onClick={() => navigate("/login")}>Zum Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
