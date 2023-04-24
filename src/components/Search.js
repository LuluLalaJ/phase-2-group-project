// search functionality goes here

import React, { useState } from "react";
import CatList from "./CatList";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <CatList searchTerm={searchTerm} />
    </div>
  );
}

export default Search;
