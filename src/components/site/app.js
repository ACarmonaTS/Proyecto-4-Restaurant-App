import React from "react";

import Header from "./header/header.js"
import Menu from "./main/menu/menu.js";
// import Cards from "./main/menu/cards.js"

function App() {
  return(
    <React.Fragment>
      <header>{Header()}</header>
      <main>{Menu()}</main>
    </React.Fragment>
  )
}

export default App;
