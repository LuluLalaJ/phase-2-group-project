// the compiled list of all cats where the user can browse
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import Filter from './Filter';
import Search from './Search'

function RenderedCats() {
  const breedsUrl = "https://api.thecatapi.com/v1/breeds/"
  const [breeds, setBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [traits, setTraits] = useState([])

  useEffect(() => {
    fetch(breedsUrl)
    .then(r => r.json())
    .then(data => setBreeds(data))
  }, [])

  function searchBreed(breed) {
    setSearchTerm(breed)
  }

  function filterCatByTraits(traitsObj) {
    const updatedTraits = []
    for (const trait in traitsObj) {
      if (traitsObj[trait]) {
        updatedTraits.push(trait)
      }
    }
    setTraits(updatedTraits)
  }

  const displayedBreeds = breeds
  .filter((breed) => {
    if (searchTerm) {
      return breed.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return true;
    }
  }).filter(breed => {
    if (traits.length !== 0) {
    }
    return true
  })

  return (
      <div>
      <Filter filterCatByTraits={filterCatByTraits} />
      <Search searchTerm={searchTerm} searchBreed={searchBreed} />
      <CatList breeds={displayedBreeds} />
      </div>
    );
  }

export default RenderedCats;
