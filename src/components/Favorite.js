
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoriteContext } from "../context/FavoriteContext";


function Favorite(props) {

    const { deleteFav } = useContext(FavoriteContext)

    const { fav } = props

    return (
        <div>
            <h2>{fav.name}</h2>
            <img src={fav.image} style={{width: 300}}></img>
            <Link to={`/breeds/` + fav.breedId}>See breed detail</Link>
            <button onClick={()=>deleteFav(fav.id)}>remove from favorites</button>
        </div>
    )
}

export default Favorite
