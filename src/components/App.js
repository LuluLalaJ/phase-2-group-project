import React, { useState } from "react";
import NavBar from "./NavBar";
import CatHomepage from "./CatHomepage";
import RenderedCats from "./RenderedCats";
import { Route, Switch } from "react-router-dom";
import Favorites from "./Favorites";
import { FavoriteProvider } from "../context/FavoriteContext";

function App() {
  const [searchHidden, setSearchHidden] = useState(false)
  
  function toggleSearch() {
    setSearchHidden(searchHidden => !searchHidden)
  }
  const [filterHidden, setFilterHidden] = useState(false)
  function toggleFilter() {
    setFilterHidden(filterHidden => !filterHidden)
  }

  return (
    <div>
      <NavBar toggleSearch={toggleSearch} toggleFilter={toggleFilter}/>
      <Switch>
        <Route exact path="/">
          <CatHomepage />
        </Route>

        <FavoriteProvider>
          <Route path="/breeds">
            <RenderedCats searchHidden={searchHidden} filterHidden={filterHidden}/>
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>
        </FavoriteProvider>
      </Switch>
    </div>
  );
}

export default App;
