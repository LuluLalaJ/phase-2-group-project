//run  json-server --watch db.json --port 8000

import { useEffect, useState } from 'react'

function Favorites() {
  const [favs, setFavs] = useState([])
  const favUrl = "http://localhost:8000/favBreeds"

  useEffect(() => {
    fetch(favUrl)
    .then(r => r.json())
    .then(data => setFav(data))
  },[])

  const renderFavs = favs.map( fav => <)


  return (
      <div>
        <h1>Here are your favorite cats</h1>
        {renderFavs}
      </div>

    );
  }

export default Favorites;
