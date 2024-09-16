import React from "react";
import Header from "../../components/Header";

function About() {
  return (
    <div>
      <div className="header">
        <Header /> {/* On inclut Header sur la page À propos */}
      </div>
      <h1>À propos de nous</h1>
      <p>Ceci est la page À propos.</p>
    </div>
  );
}

export default About;
