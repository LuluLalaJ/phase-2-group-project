// search functionality goes here
import React, { useState } from "react";

function Search(props) {
  const { searchTerm, searchBreed} = props

  function handleInputChange(event) {
      const term = event.target.value
      searchBreed(term)
    }

  return (
    <div>
      Search Bar: 
      <input type="text" value={searchTerm} onChange={handleInputChange} />
    </div>
  );
}

export default Search;
