import React from "react";

import Header from "./header/header.js";
import Menu from "./main/menu/menu.js";
import Location from "./main/location/location.js";
// import Cards from "./main/menu/cards.js"

function App() {
  return (
    <React.Fragment>
      <header>{Header()}</header>
      <main>
        {Menu()}
        {Location()}
      </main>
    </React.Fragment>
  );
}

export default App;
