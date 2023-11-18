import React, { useState } from "react";
import "./CustomSelect.css"; // Import your custom CSS file

const CustomSelect = ({ options, handleTitleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (e, value) => {
    e.preventDefault();
    setSelectedOption(value);
    setIsOpen(false);
    handleTitleChange(value);
  };

  return (
    <div className="custom-select-container">
      <div className="custom-select" onClick={toggleDropdown}>
        <div className="selected-option">{selectedOption || "Select"}</div>
        <div className={`dropdown-icon ${isOpen ? "open" : ""}`}>&#8964;</div>
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((value, index) => (
            <div
              key={index}
              className={`option ${selectedOption === value ? "selected" : ""}`}
              onClick={(e) => handleOptionSelect(e, value)}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
