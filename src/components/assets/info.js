import logo from "./logo.png";
import carnes from "./ham-4carnes.png";
import guacamole from "./ham-guacamole.png";
import xtreme from "./ham-xtreme.png";
import hamSavP from "./stacker_salvaje_pollo-1.png";
import whoper from "./whopper.png";
import long from "./long.png";
import stacker from "./stacker.png"
import angry from "./angry.png"
import king from "./king.png"
import locate from "./locate.gif";
import calendar from "./calendar.gif";
import call from "./call.gif";

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

export const burgers2 = [
  {
    title: "Stacker Salvaje Pollo",
    price: "$105.00",
    src: hamSavP,
    alt: "Stacker Salvaje Pollo",
    description:
      "Nueva Stacker Salvaje con aros de cebolla, salsa Pepper Jack y pollo empanizado crujiente. ",
    sentence: " ¡Échale!"
  },
  {
    title: "Long Rodeo",
    price: "$115.00",
    src: long,
    alt: "4CARNES",
    description:
      "Carne de res a la parrilla, queso americano, aros de cebolla crujientes, salsa BBQ ¿ya se te antojó, verdad? ",
    sentence: " ¡Pídela en COMBO con papas a la francesa y refresco frío! "
  },
  {
    title: "WHOPPER® con Queso",
    price: "$120.00",
    src: whoper,
    alt: "XTREME",
    description:
      "Nuestra WHOPPER® Doble con Queso está preparada con dos carnes de res a la parrilla, jugosos tomates, lechuga recién cortada, mayonesa, pepinillos y cebollas en rodajas, sobre un pan suave con ajonjolí. ",
    sentence: " ¡Pídela en COMBO con papas a la francesa y refresco frío!"
  }
];

export const burgers3 = [
  {
    title: "Stacker King",
    price: "$90.00",
    src: stacker,
    alt: "Stacker King",
    description:
      "La hamburguesa más grande de todos los tiempos llega a tus dos manos.Con tocino crujiente, queso derretido, salsa Stacker y con 1, 2, 3 o, ¡hasta 4 carnes! ",
    sentence: " Pidela a tu manera."
  },
  {
    title: "Bacon King",
    price: "$105.00",
    src: king,
    alt: "Bacon King",
    description:
      "Nuestra BACON KING® cuenta con dos carnes de res a la parrilla, cubiertas con una porción abundante de crujiente tocino, queso americano, cátsup y cremosa mayonesa, sobre un pan suave con ajonjolí.  ",
    sentence: " ¡Pídela en COMBO con papas a la francesa y refresco frío! "
  },
  {
    title: "WHOPPER® Angry",
    price: "$125.00",
    src: angry,
    alt: "WHOPPER® Angry",
    description:
      "Nuestra WHOPPER® Angry lleva una carne de res a la parrilla, preparada con deliciosas tiras de tocino, jugosos tomates, lechuga recién cortada, mayonesa, jalapeños y cebollitas angry, sobre un pan suave con ajonjolí. ",
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