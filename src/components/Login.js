import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import axios from "axios";

const LOGO_DEFAULT = "/DinoGreenLogo.png";
const LOGO_BLINDFOLD = "/DinoGreenBlindfoldLogo.png";

const GUEST_EMAIL = "gast@iu-study.org";
const GUEST_PASSWORD = "Gast123?";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState(LOGO_DEFAULT);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ⬅️ Status für Ladeanzeige

  const handlePasswordFocus = () => setLogo(LOGO_BLINDFOLD);
  const handlePasswordBlur = () => setLogo(LOGO_DEFAULT);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (email.toLowerCase() === GUEST_EMAIL && password === GUEST_PASSWORD) {
      console.log("Gast-Login erkannt");
      sessionStorage.setItem("isGuest", "true");
      navigate("/home");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email.toLowerCase(),
        passwort: password,
      });

      console.log("Login erfolgreich:", response.data);
      sessionStorage.setItem("isGuest", "false");
      navigate("/home");
    } catch (error) {
      console.error("Fehler beim Login:", error);
      setError(error.response?.data?.error || "Fehler beim Login.");
    } finally {
      setLoading(false); // ⬅️ Ladeanzeige zurücksetzen
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <img
        src={logo}
        alt="Logo"
        className="login-logo position-absolute top-0 start-5 m-5 rounded-circle"
        onClick={() => navigate("/")}
      />
      <div className="login-box p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>

        {/* Fehleranzeige */}
        {error && <div className="alert alert-danger">{error}</div>}

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
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100" disabled={loading}>
            {loading ? "Lädt..." : "Anmelden"}
          </button>
        </form>

        <p className="text-center mt-3">
          Noch kein Konto?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Registrieren
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
