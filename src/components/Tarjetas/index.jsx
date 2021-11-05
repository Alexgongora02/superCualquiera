import React from "react";
import Tarjeta from "./Tarjeta";

const cards = [
  {
    card: "american",
    img: "./assets/cards/american.png",
    desc: "Realiza tu pedido el día que prefieras y programá tu entrega para el día jueves.",
  },
  {
    card: "visa",
    img: "./assets/cards/visa.png",
    desc: "Realiza tu pedido el día que prefieras y programá tu entrega para el día viernes.",
  },
  {
    card: "maestro",
    img: "./assets/cards/maestro.png",
    desc: "3 cuotas sin interés. Realizando tu compra los días Miércoles y programando la entrega para el día que prefieras",
  },
];

export default function Tarjetas() {
  return (
    <div className="row">
      {cards.map((card) => (
        <Tarjeta key={card.card} card={card} />
      ))}
    </div>
  );
}
