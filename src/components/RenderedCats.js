// the compiled list of all cats where the user can browse
import React, { useEffect, useState } from "react";
import CatList from "./CatList";
import CatSearchFilter from "./CatSearchFilter";
import Favorites from "./Favorites";


function RenderedCats() {
  const breedsUrl = "https://api.thecatapi.com/v1/breeds/"
  const [breeds, setBreeds] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(breedsUrl)
    .then(r => r.json())
    .then(data => setBreeds(data))
  }, [])



  return (
      <div>
        <CatList breeds={breeds} />
        <CatSearchFilter searchTerm={searchTerm}/>
        <Favorites />
      </div>
    );
  }

export default RenderedCats;
