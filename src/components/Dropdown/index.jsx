import React, { useState } from "react";
import "../../style/Dropdown.css";
import icon from "../../assets/icons/Vector.png";

function Dropdown({ children, placeholder = "Select" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-buttons" onClick={toggleDropdown}>
        {placeholder}
        <img src={icon} alt="" />
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
