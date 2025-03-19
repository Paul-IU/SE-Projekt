import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Einzelspieler from "../components/modi/Einzelspieler";
import EinzelspielerOF from "../components/modi/EinzelspielerOF.js";
import VS from "../components/modi/VS";
import Kooperativ from "../components/modi/Kooperativ.js";
import Fragebogen from "../components/modi/Fragebogen.js";
import NotFound from "../components/NotFound";
import Impressum from "../components/Impressum.js";
import Datenschutz from "../components/Datenschutz.js";

console.log("EinzelspielerOF:", EinzelspielerOF);
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/einzelspieler" element={<Einzelspieler/>} />
      <Route path="/einzelspielerof" element={<EinzelspielerOF/>} />
      <Route path="/vs" element={<VS/>} />
      <Route path="/kooperativ" element={<Kooperativ/>} />
      <Route path="/fragebogen" element={<Fragebogen/>} />
      <Route path="*" element={<NotFound />} /> {/* Fehlerseite für ungültige URLs */}
    </Routes>
  );
};
export default AppRouter;
