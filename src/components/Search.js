// search functionality goes here
import React, { useState } from "react";

function Search() {
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
    </div>
  );
}

export default Search;
