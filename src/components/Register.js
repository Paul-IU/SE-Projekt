import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Eigenes CSS für Styling



const LOGO_DEFAULT = "/DinoGreenLogo.png"
const LOGO_BLINDFOLD = "/DinoGreenBlindfoldLogo.png"


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logo, setLogo] = useState(LOGO_DEFAULT)

  const handlePasswordFocus = () => {
    setLogo(LOGO_BLINDFOLD);
  };
  const handlePasswordBlur = () => {
    setLogo(LOGO_DEFAULT)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Die Passwörter stimmen nicht überein!");
      return;
    }
    console.log("Registrierung erfolgreich:", { email, password });
  };
    const navigate = useNavigate();
  
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
