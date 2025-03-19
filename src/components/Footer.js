import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css"; // Importiere das CSS

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <span onClick={() => navigate("/impressum")}>Impressum</span>
      <span onClick={() => navigate("/datenschutz")}>Datenschutz</span>
    </footer>
  );
};

export default Footer;
