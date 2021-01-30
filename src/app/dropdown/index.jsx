import React, { useState } from "react";
import "./styles.css";

function Dropdown({ options, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="control"
        onClick={() => setOpen((previousValue) => !previousValue)}
      >
        <div className="selected-value">{value ? value.name : placeholder}</div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {options.map((option) => (
          <div
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
