import React from "react";

import Cards from "./cards.js"
import * as Info from "../../../assets/info.js"

function Menu(){
    return(
        <React.Fragment>
            <menu>
                {Info.burgers.map((tipeBurgers, index) => {
                    return(
                        <Cards key={index} data={tipeBurgers} />
                    );
                })}
            </menu>
        </React.Fragment>
    )
}

export default Menu