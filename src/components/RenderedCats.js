// the compiled list of all cats where the user can browse
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import Filter from './Filter';
import Search from './Search'

function RenderedCats(props) {
  const breedsUrl = "https://api.thecatapi.com/v1/breeds/"
  const [breeds, setBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [traits, setTraits] = useState([])
  const { searchHidden, filterHidden } = props

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
      for (const trait of traits) {
        if (breed[trait] <=3)
          return false
     }
    }
    return true
  })

  return (
      <div className="cats-container">
      {filterHidden ? <Filter filterCatByTraits={filterCatByTraits} /> : null}
      {searchHidden ? <Search searchTerm={searchTerm} searchBreed={searchBreed} /> : null}
      <CatList breeds={displayedBreeds} />
      </div>
    );
  }

export default RenderedCats;
