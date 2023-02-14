import React from "react";

import * as Info from "../../assets/info.js";
import InsertImg from "../image.js";
import * as Options from "./options.js";
import CreateList from "./list.js";

function Header() {
    window.onresize = function() {
      if(window.innerWidth>=1200){
        document.getElementById("menuDespl").style.visibility="hidden"
      }
  };
  let statusHam = 0;
  const visibleMenu = () => {
    if(!statusHam){
      document.getElementById("menuDespl").style.visibility="visible"
      statusHam = 1;
    }else{
      document.getElementById("menuDespl").style.visibility="hidden"
      statusHam = 0;
    }
  }
  const invisibleMenu = () =>{
    document.getElementById("menuDespl").style.visibility="hidden";
  }
  return (
    <React.Fragment>
      <nav className="fullScreen">
        <div>
          <ul>
            {" "}
            {Options.optionsHeaderLeft.map((option, index) => (
              <CreateList key={index} data={option.desc} href={option.href}/>
            ))}{" "}
          </ul>
        </div>
        <div className="logo">
          <InsertImg src={Info.logoData.src} alt={Info.logoData.alt} />
        </div>
        <div>
          <ul>
            {" "}
            {Options.optionsHeaderRigth.map((option, index) => {
              return <CreateList key={index} data={option.desc} href={option.href} />;
            })}{" "}
          </ul>
        </div>
      </nav>

      <nav className="smallScreen" id="smallScreen">
        <div className="logoSmall" onClick={visibleMenu}>
          <InsertImg src={Info.logoData.src} alt={Info.logoData.alt} />
        </div>
        <div id="menuDespl">
          <ul onClick={invisibleMenu}>
            {" "}
            {Options.optionsHeaderLeft.map((option, index) => (
              <CreateList key={index} data={option.desc} href={option.href}/>
            ))}
            {Options.optionsHeaderRigth.map((option, index) => {
              return <CreateList key={index} data={option.desc} href={option.href} />;
            })}{" "}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
