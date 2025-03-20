import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";


const LOGO_DEFAULT = "/DinoGreenLogo.png"
const LOGO_BLINDFOLD = "/DinoGreenBlindfoldLogo.png"

const GUEST_EMAIL = "gast@iu-study.org";
const GUEST_PASSWORD = "Gast123?";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logo, setLogo] = useState(LOGO_DEFAULT);

    const handlePasswordFocus = () => {
      setLogo(LOGO_BLINDFOLD);
    };
    const handlePasswordBlur = () => {
      setLogo(LOGO_DEFAULT);
    };


    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleLogin = (e) => {
      e.preventDefault();

      if (email.toLocaleLowerCase === GUEST_EMAIL && password === GUEST_PASSWORD) {
        console.log("Gast-Login erkannt");
        sessionStorage.setItem("isGuest", "true"); // Speichert Gast-Status
      } else {
        console.log("Normales Login:", {email, password});
        sessionStorage.setItem("isGuest", "false");

      }
      navigate("/home");
    };



  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
        <img
        src={logo}
        alt="Logo"
        className="login-logo position-absolute top-0 start-5 m-5 rounded-circle "
        
        onClick={() => navigate("/")}
      />
      <div className="login-box p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Gib deine E-Mail ein" 
              value={email}
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Anmelden</button>
        </form>
        <p className="text-center mt-3">
          Noch kein Konto? <span className="text-primary" style={{cursor: "pointer"}} onClick={() => navigate("/register")}>Registrieren</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
