import React, { useState } from "react";

import InsertImg from "../../image.js";
import * as Info from "../../../assets/info.js";
import { db } from "../../database/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Reserve() {
  const [style, setStyle] = useState({ display: "none" });
  const [inputValue, setInputValue] = useState("");
  const [labelStyle, setLabelStyle] = useState({ display: "none" })

  async function createReserve() {
    let names = document.getElementById("name").value;
    let lastNames = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phone").value;
    let dataDate = document.getElementById("date").value;
    let dataTime = document.getElementById("time").value;

    let reserve = { names, lastNames, phoneNumber, dataDate, dataTime };
    const valueReserve = Object.values(reserve);
    const spaces = valueReserve.some((dato) => dato.trim().length === 0);
    if (!spaces) {
      await addDoc(collection(db, "reservaciones"), reserve);
      getData(reserve);
    } else {
      alert("Completa todos los campos del formulario");
    }
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
  }

  async function getData(dataReserve) {
    const snapshot = await getDocs(collection(db, "reservaciones"));
    const data = snapshot.docs.map((doc) => doc.data());
    const dataId = snapshot.docs.map((doc) => doc);

    data.forEach((datos, index) => {
      if (dataReserve.phoneNumber === datos.phoneNumber) {
        setLabelStyle({
          borderTop: "2px solid white",
          marginTop: "10px",
          paddingTop: "10px",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          display: "block"
        });
        setStyle({
          background: "black",
          margin: "auto",
          color: "white",
          fontWeight: "bold",
          display: "block"
        });
        setInputValue(dataId[index].id);
        return;
      }
    });
  }
  return (
    <React.Fragment>
      <section id="reser" className="reserve">
        <div>
          <InsertImg src={Info.logoData.src} alt={Info.logoData.alt} />
        </div>
        <input
          placeholder="Nombre (s)"
          autoComplete="off"
          type="text"
          className="name"
          id="name"
        />
        <input
          placeholder="Apellido (s)"
          autoComplete="off"
          type="text"
          className="lastName"
          id="lastName"
        />
        <input
          placeholder="Número de celular: (+55) 0123456789"
          type="tel"
          autoComplete="off"
          className="phone"
          id="phone"
          required
        />
        <div className="datesTime">
          <input type="date" className="date" id="date" />
          <input type="time" className="time" id="time" />
        </div>
        <button id="search" type="submit" onClick={() => createReserve()}>
          RESERVAR
        </button>
        <label style={labelStyle} className="label">Tu ID de reserva es:
          <input
            style={style}
            type="text"
            value={inputValue}
            className="idReserve"
            readOnly
          ></input>
        </label>
        
      </section>
    </React.Fragment>
  );
}

export default Reserve;
