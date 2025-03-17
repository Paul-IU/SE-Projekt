import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AppRouter from "./routes/AppRouter";  // Import aus `/routes/`


function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
