import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import CatHomepage from "./CatHomepage";
import RenderedCats from "./RenderedCats";
import Favorites from "./Favorites";
import { FavoriteProvider } from "../context/FavoriteContext";
//run  json-server --watch db.json --port 8000


function App() {
  const [searchHidden, setSearchHidden] = useState(false)
  function toggleSearch() {
    setSearchHidden(searchHidden => !searchHidden)
  }

  const [filterHidden, setFilterHidden] = useState(false)
  function toggleFilter() {
    setFilterHidden(filterHidden => !filterHidden)
  }

  //need to refactor the dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
  }

  return (
    <div>
      <NavBar
        toggleSearch={toggleSearch}
        toggleFilter={toggleFilter}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <Switch>
        <main>
        <Route exact path="/">
          <CatHomepage isDarkMode={isDarkMode}/>
        </Route>
        <FavoriteProvider>
          <Route path="/breeds">
            <RenderedCats searchHidden={searchHidden} filterHidden={filterHidden}/>
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </FavoriteProvider>
        </main>
      </Switch>
    </div>
  );
}

export default App;
