import React from "react";
import { useSelector } from "react-redux";
import remaining from "./remaining";

export default function Pedidos() {
  const pedidos = useSelector((state) => state.pedidos);
  const fecha = pedidos[0].entrega;

  return (
    <div>
      <p>Su pedido será entregado en {remaining(fecha)}</p>
    </div>
  );
}
