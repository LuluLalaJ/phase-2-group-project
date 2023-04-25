
import { Link } from 'react-router-dom'

function Favorite(props) {
    const { fav } = props
    console.log(fav)

    return (
        <div>
            <h2>{fav.name}</h2>
            <img src={fav.image} style={{width: 300}}></img>
            <Link to={`/breeds/` + fav.breedId}>See breed detail</Link>
            <button>remove from favorites</button>
        </div>
    )
}

export default Favorite
