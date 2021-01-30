import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function Dropdown({ options, id, label, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const events = ["click", "touchend"];
    events.forEach((e) => document.addEventListener("click", toggle));
    return () => {
      events.forEach((e) => document.removeEventListener("click", toggle));
    };
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function getValue() {
    if (query.length > 0) {
      return query;
    }

    if (value && value[label].length > 0) {
      return value[label];
    }

    return "";
  }

  function isEmptyFilter() {
    return query.length > 0 && filter(options).length === 0;
  }

  function selectOption(option) {
    setQuery("");
    onChange(option);
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value[label] : placeholder}
            value={getValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => selectOption(option)}
            onTouchEnd={() => selectOption(option)}
          >
            {option[label]}
          </div>
        ))}
        {isEmptyFilter() && <div className="option">No match found</div>}
      </div>
    </div>
  );
}

export default Dropdown;
