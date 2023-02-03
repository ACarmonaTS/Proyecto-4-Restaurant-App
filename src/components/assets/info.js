import logo from "./logo.png";
import carnes from "./ham-4carnes.png";
import guacamole from "./ham-guacamole.png";
import xtreme from "./ham-xtreme.png";
import locate from "./locate.gif"
import calendar from "./calendar.gif"
import call from "./call.gif"

export const logoData = { src: logo, alt: "LOGO" };
export const burgers = [
  {
    title: "Hamburguesa de guacamole",
    price: "$85.00",
    src: guacamole,
    alt: "GUACAMOLE",
    description:
      "Con doble carne a la parrilla, cremoso guacamole, lechuga fresca, rodajas de jalapeño, queso Monterrey, tocino y cebollitas crujientes. ",
    sentence: " !Un mundo nuevo lleno de sabor!"
  },
  {
    title: "Hamburguesa de 4 carnes",
    price: "$125.00",
    src: carnes,
    alt: "4CARNES",
    description:
      "Nueva Stacker Salvaje con aros de cebolla, salsa Pepper Jack y 4 carnes a la parrilla. ",
    sentence: " ¡Échale!"
  },
  {
    title: "Hamburguesa de X-TREME",
    price: "$150.00",
    src: xtreme,
    alt: "XTREME",
    description:
      "Con doble carne a la parrilla, Nuestra deliciosa X-Treme® lleva dos carnes de res a la parrilla, preparadas con jugosos tomates, salsa especial X-treme, mayonesa, pepinillos, cebollas en rodajas, queso amarillo y queso americano, sobre un pan suave con ajonjolí.",
    sentence: " ¡Pídela en COMBO con papas a la francesa y refresco frío!"
  }
];

export const dataCenter = [
  {
    title: "Horario de servio",
    src: calendar,
    alt: "CALENDARIO",
    description: "L - S, 10 am - 10 pm"
  },
  {
    title: "Nuestra ubicación",
    src: locate,
    alt: "UBICACIÓN",
    description: "Calle #00, Mun/Alcal, Edo., C.P."
  },
  {
    title: "Atención al cliente",
    src: call,
    alt: "LLAMADA",
    description: "(+00) 11 2233 4455"
  }
];