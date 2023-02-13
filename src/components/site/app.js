import React from "react";

import Header from "./header/header.js";
import Menu from "./main/menu/menu.js";
import Presentation from "./main/principal/presentation.js";
import Location from "./main/location/location.js";
import Reserve from "./main/reserve/reserve.js";
import Footer from "./footer/footer.js";

function App() {
  return (
    <React.Fragment>
      <header>{Header()}</header>
      <main>
        {Presentation()}
        {Menu()}
        {Location()}
        {Reserve()}
      </main>
      <footer>{Footer()}</footer>
    </React.Fragment>
  );
}

export default App;
