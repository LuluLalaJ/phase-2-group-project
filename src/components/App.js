import React from "react";
import NavBar from "./NavBar";
import CatHomepage from "./CatHomepage";
import RenderedCats from "./RenderedCats";

function App() {
  return (
    <div>
      <h1>HELLO FROM APP</h1>
      <NavBar />
      <CatHomepage />
      <RenderedCats /> 
    </div>
  );
}

export default App;
