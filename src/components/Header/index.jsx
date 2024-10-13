import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div>
          <img src={logo} alt="Site Logo" className="logo" />
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  end
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  À propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
