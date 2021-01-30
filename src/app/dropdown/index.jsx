import React from "react";
import "./styles.css";

function Dropdown({ options }) {
  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">Select...</div>
        <div className="arrow"></div>
      </div>
      <div className="options">
        {options.map((option) => (
          <div className="option">{option.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
