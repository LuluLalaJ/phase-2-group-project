// the list of cats that will display when the user activates a filter
// the list of cats that will display when the user searches for cats
import Filter from "./Filter";
import Search from "./Search";

function CatSearchFilter() {
    return (
      <div>
        <h1>HELLO FROM CatSearchFilter</h1>
        <Filter />
        <Search />
      </div>
    );
  }

export default CatSearchFilter;
