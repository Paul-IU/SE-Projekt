import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Einzelspieler from "../components/modi/Einzelspieler";
import VS from "../components/modi/VS";
import Kooperativ from "../components/modi/Kooperativ";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/einzelspieler" element={<Einzelspieler/>} />
      <Route path="/vs" element={<VS/>} />
      <Route path="/kooperativ" element={<Kooperativ/>} />
      <Route path="*" element={<NotFound />} /> {/* Fehlerseite für ungültige URLs */}
    </Routes>
  );
};

export default AppRouter;
