import React from "react";

import Cards from "./cards.js"
import * as Info from "../../../assets/info.js"

function Location(){
    return(
        <React.Fragment>
            <div className="locationCards">
                {Info.dataCenter.map((data, index) => {
                    return(
                        <Cards key={index} data={data} />
                    );
                })}
            </div>
        </React.Fragment>
    )
}

export default Location