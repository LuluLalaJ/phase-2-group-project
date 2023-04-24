import React from "react";
import NavBar from "./NavBar";
import CatHomepage from "./CatHomepage";
import RenderedCats from "./RenderedCats";
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <CatHomepage />
        </Route>
        <Route>
          <RenderedCats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
