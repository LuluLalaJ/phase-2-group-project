import React from "react";

function Search(props) {
  const { searchTerm, searchBreed} = props

  function handleInputChange(event) {
      const term = event.target.value
      searchBreed(term)
    }

  return (
    <div className="search" style={{  display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>Search Breed:</h1>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Enter a breed name..." />
    </div>
  );
}

export default Search;
