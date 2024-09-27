import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div>
          <img src={logo} alt="Site Logo" className="logo" />{" "}
          {/* Logo du site */}
        </div>
        <div>
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
              {/* <li>
                <Link to="/error">Error</Link>{" "}
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
