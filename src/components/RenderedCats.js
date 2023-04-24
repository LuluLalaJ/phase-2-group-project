// the compiled list of all cats where the user can browse
import CatList from "./CatList";
import CatSearchFilter from "./CatSearchFilter";
import Favorites from "./Favorites";


function RenderedCats() {
    return (
      <div>
        <h1>HELLO FROM RENDEREDCATS</h1>
        <CatList />
        <CatSearchFilter />
        <Favorites />
      </div>
    );
  }

export default RenderedCats;
