import React from "react";

import Dropdown from "./dropdown";
import countries from "../data/countries.json";

export default function App() {
  return (
    <div style={{ width: 200 }}>
      <Dropdown options={countries} />
    </div>
  );
}
