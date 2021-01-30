import React, { useState } from "react";

import Dropdown from "./dropdown";
import countries from "../data/countries.json";

export default function App() {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        options={countries}
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Select..."
      />
    </div>
  );
}
