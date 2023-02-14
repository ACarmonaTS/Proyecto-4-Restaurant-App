import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/header.js";
import Menu from "./main/menu/menu.js";
import Presentation from "./main/principal/presentation.js";
import Location from "./main/location/location.js";
import Reserve from "./main/reserve/reserve.js";
import Footer from "./footer/footer.js";

function App() {
  const ocultar = () => {
    document.getElementById("sleepSection").style.display = "none";
  }
  return (
      <BrowserRouter>
      <React.Fragment>
        <header onClick={ocultar}><Header /></header>
        <div id="sleepSection" style={{display: "flex"}}><Presentation /></div>
        <main>
          <Routes>
              <Route path="/principal" element={<Presentation />} />
              <Route path="/menuHam" element={<Menu />} />
              <Route path="/loc" element={<Location />} />
              <Route path="/reser" element={<Reserve />} />
          </Routes>
        </main>
        <footer>{Footer()}</footer>
        </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
