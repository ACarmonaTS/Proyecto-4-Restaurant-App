import React from "react";

import * as Images from "../../assets/images.js";
import InsertImg from "../image.js";
import * as Options from "./options.js";
import CreateList from "./list.js";

function Header() {
  return (
    <React.Fragment>
      <nav>
        <div>
          <ul>
            {" "}
            {Options.optionsHeaderLeft.map((option, index) => (
              <CreateList key={index} data={option} />
            ))}{" "}
          </ul>
        </div>
        <div className="logo">
          <InsertImg src={Images.logoData.src} alt={Images.logoData.alt} />
        </div>
        <div>
          <ul>
            {" "}
            {Options.optionsHeaderRigth.map((option, index) => {
              return <CreateList key={index} data={option} />;
            })}{" "}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
