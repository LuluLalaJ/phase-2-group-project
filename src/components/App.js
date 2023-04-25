import React from "react";
import NavBar from "./NavBar";
import CatHomepage from "./CatHomepage";
import RenderedCats from "./RenderedCats";
import CatSearchFilter from "./CatSearchFilter";
import { Route, Switch } from "react-router-dom";
import Favorites from "./Favorites";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <CatHomepage />
        </Route>
        <Route path="/search-filter">
          <CatSearchFilter />
        </Route>
        <Route path="/breeds">
          <RenderedCats />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
