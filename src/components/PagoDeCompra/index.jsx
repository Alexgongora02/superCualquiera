import React from "react";
import { useSelector } from "react-redux";

export default function PagoDeCompra() {
  const carrito = useSelector((state) => state.carrito);
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  
  return <div>Pagalo! Total: {total}</div>;
}
