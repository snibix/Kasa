import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-container">
          <img src={logo} alt="Site Logo" className="logo" />{" "}
          {/* Logo du site */}
          <nav>
            <ul>
              <li>
                <Link to="/" className="link-home">
                  Accueil
                </Link>{" "}
                {/* Lien vers la page d'accueil */}
              </li>
              <li>
                <Link to="/about">À propos</Link>{" "}
                {/* Lien vers la page À propos */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
