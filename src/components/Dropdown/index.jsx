import React, { useState } from "react";
import "../../style/Dropdown.css";

function Dropdown({ options, onSelect, placeholder = "Select" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selecedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // Appel de la fonction de rappel si elle est fournie
  };
  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selecedOption ? selecedOption.label : placeholder}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map(
            (
              option // Correction ici : utiliser map, pas maps
            ) => (
              <div
                key={option.value}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
