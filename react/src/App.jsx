import React, { useState, useEffect } from "react";
import "./App.css";
import Body from './components/body/body.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from "./pages/IngresaPages/IngresaPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
import axios from "axios"

function App() {
  const url = "https://red-social-opju.onrender.com/"
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/ingresa" element={<LoginForm />} />
          <Route path="/registrate" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;