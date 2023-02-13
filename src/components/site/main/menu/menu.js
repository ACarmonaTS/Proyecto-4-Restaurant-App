import React from "react";

import Cards from "./cards.js"
import * as Info from "../../../assets/info.js"

function Menu(){
    return(
        <React.Fragment>
            <menu id="menuHam">
                <h3>Lo más pedido</h3>
                <div className="container">
                    {Info.burgers.map((tipeBurgers, index) => {
                        return(
                            <Cards key={index} data={tipeBurgers} />
                        );
                    })}
                </div>
                <div className="container">
                    {Info.burgers2.map((tipeBurgers, index) => {
                        return(
                            <Cards key={index} data={tipeBurgers} />
                        );
                    })}
                </div>
                <div className="container">
                    {Info.burgers3.map((tipeBurgers, index) => {
                        return(
                            <Cards key={index} data={tipeBurgers} />
                        );
                    })}
                </div>
            </menu>
        </React.Fragment>
    )
}

export default Menu