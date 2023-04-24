// rendering cat information here
// this is where the API information will be fetched to
import CatCard from "./CatCard";

function CatList(props) {
  const {breeds} = props

  const renderCatBreeds = breeds.map( breed =>
      <CatCard
        key={breed.id}
        breed={breed}
      />
    )

    return (
      <div>
        <h1>HELLO FROM CATLIST</h1>
        {renderCatBreeds}
      </div>

    );
  }

export default CatList;
