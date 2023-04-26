import React, { useState } from "react";

function Search(props) {
  const { searchTerm, searchBreed} = props

  function handleInputChange(event) {
      const term = event.target.value
      searchBreed(term)
    }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      Search Bar: 
      <input type="text" value={searchTerm} onChange={handleInputChange} />
    </div>
  );
}

export default Search;

