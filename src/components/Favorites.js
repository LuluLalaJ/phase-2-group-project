//run  json-server --watch db.json --port 8000

import { useEffect, useState, useContext } from 'react'
import Favorite from './Favorite'
import { FavoriteContext } from "../context/FavoriteContext";

function Favorites() {
  const { favorites, setFavorites, favoriteUrl } = useContext(FavoriteContext)

  useEffect(() => {
    fetch(favoriteUrl)
    .then(r => r.json())
      .then(data => setFavorites(data))
  }, [])

  const renderFavs = favorites.map( fav =>
    <Favorite key={fav.id} fav={fav}/>
  )

  return (
      <div>
        <h1>Here are your favorite cats</h1>
        {renderFavs}
      </div>

    );
  }

export default Favorites;
