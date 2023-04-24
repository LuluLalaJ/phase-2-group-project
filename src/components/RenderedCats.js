// the compiled list of all cats where the user can browse
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import CatSearchFilter from "./CatSearchFilter";
import Favorites from "./Favorites";


function RenderedCats() {
  const breedsUrl = "https://api.thecatapi.com/v1/breeds/"
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    fetch(breedsUrl)
    .then(r => r.json())
    .then(data => setBreeds(data))
  }, [])

  return (
      <div>
        <h1>HELLO FROM RENDEREDCATS</h1>
        <CatList breeds={breeds} />
        <CatSearchFilter />
        <Favorites />
      </div>
    );
  }

export default RenderedCats;
