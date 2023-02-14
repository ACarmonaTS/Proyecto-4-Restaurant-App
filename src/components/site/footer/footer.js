import React from "react";

import * as Info from "../../assets/info.js";
import InsertImg from "../image.js";
import * as Options from "./options.js";
import CreateList from "./list.js";

function Footer() {
  return (
    <React.Fragment>
      <div className="izqFooter">
        <ul>
          {" "}
          {Options.optionsFooterLeft.map((option, index) => (
            <CreateList key={index} data={option} />
          ))}{" "}
        </ul>
      </div>
      <div className="hamFooter">
        <InsertImg src={Info.logoData.src} alt={Info.logoData.alt} />
      </div>
      <div>
        <ul className="footerRigth">
          {" "}
          {Options.optionsFooterRigth.map((option, index) => {
            return <CreateList key={index} data={option} />;
          })}{" "}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Footer;
