import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoriteContext } from "../context/FavoriteContext";


function Favorite(props) {

    const { deleteFav } = useContext(FavoriteContext)
    const { fav } = props

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'}}>
            <h2>{fav.name}</h2>
            <img src={fav.image} style={{width: 300}}></img>
            <div style={{
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                marginTop: '20px'}}>
                <Link to={`/breeds/` + fav.breedId} 
                style={{
                    backgroundColor: '#f0a6ca', 
                    color: '#fff', 
                    padding: '10px', 
                    borderRadius: '5px', 
                    marginRight: '10px'}}>See breed details
                    </Link>
                <button onClick={()=>deleteFav(fav.id)} 
                style={{
                    backgroundColor: '#9bd1c9', 
                    color: '#fff', 
                    padding: '10px', 
                    borderRadius: '5px'}}>Remove
                    </button>
            </div>
        </div>
    )
}

export default Favorite
