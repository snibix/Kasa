import React, { useState } from "react";
import icon from "../../assets/icons/Vector.png";

function Dropdown({ children, placeholder = "Select", className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={className}>
      <button className="dropdown-buttons" onClick={toggleDropdown}>
        {placeholder}
        <img src={icon} alt="" />
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
