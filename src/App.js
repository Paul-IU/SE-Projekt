import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AppRouter from "./routes/AppRouter";  
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container"> {/* Container für Flexbox-Layout */}
      <Router>
        <div className="main-content"> {/* Hier kommt der Seiteninhalt */}
          <AppRouter />
        </div>
        <Footer /> {/* Footer wird automatisch nach unten gedrückt */}
      </Router>
    </div>
  );
}

export default App;
