import React from "react";

import InsertImg from "../../image.js";
import * as Info from "../../../assets/info.js";

function Reserve() {
  return (
    <React.Fragment>
      <section className="reserve">
        <form>
        <div>
          <InsertImg src={Info.logoData.src} alt={Info.logoData.alt} />
        </div>
          <input
            placeholder="Nombre (s)"
            autoComplete="off"
            type="text"
            className="name"
            id="name"
            title="Ejemplo: Yazmin N"
            required
          />
          <input
            placeholder="Apellido (s)"
            autoComplete="off"
            type="text"
            className="lastName"
            id="lastName"
            title="Ejemplo: Santiago N"
            required
          />
          <input
            placeholder="Número de celular: (+55) 0123456789"
            type="tel"
            autoComplete="off"
            className="lastName"
            id="lastName"
            pattern="\([+][0-9]{2}\) [0-9]{10}"
            title="Ejemplo: (+55) 0123456789"
            required
          />
          <div className="datesTime">
            <input type="date" className="date" id="date" required/>
            <input type="time" className="time" id="time" required/>
          </div>
          <button
            id="search"
            type="submit"
            onClick={() => {
              document.getElementById("showValue").value =
                document.getElementById("date").value +
                " a las " +
                document.getElementById("time").value +
                " a nombre de " +
                document.getElementById("name").value +
                " " +
                document.getElementById("lastName").value;
            }}
          >
            RESERVAR
          </button>
        </form>
        <div>
          <input id="showValue" className="showValue" type="text" readOnly />
        </div>
      </section>
    </React.Fragment>
  );
}
export default Reserve;
