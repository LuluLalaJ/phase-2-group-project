import ShowCats from "./ShowCats";
import { Route,NavLink } from "react-router-dom"

function CatList(props) {
  const {breeds} = props

  const renderCatBreedList = breeds.map( breed =>
    <li key={breed.id}>
      <NavLink to={`/breeds/` + breed.id}>{breed.name}</NavLink>
    </li>
  )


    return (
      <div>
        <Route exact path="/breeds/">
          <h1>Choose a breed from below</h1>
        </Route>
        <ul>
          <h3>Cat Breeds</h3>
          {renderCatBreedList}
        </ul>
        <Route path="/breeds/:breedId">
          <ShowCats breeds={breeds} />
        </Route>
      </div>

    );
  }

export default CatList;
