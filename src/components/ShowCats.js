import { useParams } from "react-router-dom"
import CatCard from "./CatCard"

function ShowCats(props) {
    const { breeds } = props
    const params = useParams()


    const selectedBreed = breeds.find( breed => breed.id === params.breedId)

    return (
        <div>
            <CatCard breed={selectedBreed}/>
        </div>
    )
}

export default ShowCats
