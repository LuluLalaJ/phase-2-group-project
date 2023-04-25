// the compiled list of all cats where the user can browse
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import Filter from './Filter';
import Search from './Search'

function RenderedCats() {
  const breedsUrl = "https://api.thecatapi.com/v1/breeds/"
  const [breeds, setBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(breedsUrl)
    .then(r => r.json())
    .then(data => setBreeds(data))
  }, [])

  function searchBreed(breed) {
    setSearchTerm(breed)
  }

  function filterCatByTraits(traits) {
    console.log(traits)
  }
  const filteredBreeds = breeds.filter((breed) => {
    if (searchTerm) {
      return breed.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return true;
    }
  });

  return (
      <div>
        <CatList breeds={filteredBreeds} />
        <Filter filterCatByTraits={filterCatByTraits}/>
        <Search searchTerm={searchTerm} searchBreed={searchBreed}/>
      </div>
    );
  }

export default RenderedCats;
