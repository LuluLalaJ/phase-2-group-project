import ShowCats from "./ShowCats";
import { Route, NavLink } from "react-router-dom";

function CatList(props) {
  const { breeds } = props;

  const renderCatBreedList = breeds.map((breed) => (
    <li key={breed.id}>
      <NavLink to={`/breeds/` + breed.id}>{breed.name}</NavLink>
    </li>
  ));

  return (
    <div style={{ textAlign: "center" }}>
      <Route exact path="/breeds/">
        <h1>Choose a breed from below</h1>
      </Route>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Cat Breeds</h3>
        <ul className={"breed-list"}>
          {renderCatBreedList}
        </ul>
      </div>
      <Route path="/breeds/:breedId">
        <ShowCats breeds={breeds} />
      </Route>
    </div>
  ); 
}

export default CatList;
