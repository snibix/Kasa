import React, { useState } from "react";
import iconOpen from "../../assets/icons/Vector.png";
import iconClose from "../../assets/icons/arrow-back.png";

function Dropdown({ children, placeholder = "Select", className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={className}>
      <button
        className={`dropdown-buttons ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {placeholder}
        <img src={isOpen ? iconClose : iconOpen} alt="Toggle Dropdown" />
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
