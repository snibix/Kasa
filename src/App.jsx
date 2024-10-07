import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";

import "./scss/main.scss";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
      </Routes>
    </Router>
  );
}

export default App;
