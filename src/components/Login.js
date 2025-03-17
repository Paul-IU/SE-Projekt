import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";


const LOGO_DEFAULT = "/DinoGreenLogo.png"
const LOGO_BLINDFOLD = "/DinoGreenBlindfoldLogo.png"

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [logo, setLogo] = useState(LOGO_DEFAULT);

    const handlePasswordFocus = () => {
      setLogo(LOGO_BLINDFOLD);
    };
    const handlePasswordBlur = () => {
      setLogo(LOGO_DEFAULT)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
        <img
        src={logo}
        alt="Logo"
        className="logo position-absolute top-0 start-5 m-5 rounded-circle"
        width="250"
        height="250"
        onClick={() => navigate("/")}
      />
      <div className="login-box p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Gib deine E-Mail ein" 
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
