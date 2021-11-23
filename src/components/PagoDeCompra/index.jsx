import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { venta } from "./../../store/actions/actions";
import Detalles from "./Detalles";
import Comprador from "./Comprador";

//function to format price to local
export const formatPrice = (price) => {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};

export default function PagoDeCompra() {
  const history = useHistory();
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const handlePay = async () => {
    alert("Gracias por su compra");
    const id = await dispatch(venta(total));
    history.push(`/exito/${id}`);
  };

  return (
    <div className="bg-light py-5">
      <div
        className="bg-light mb-3 mx-auto"
        style={{ maxWidth: "30rem", minWidth: "320px" }}
      >
        <div className="card-header fs-4 bg-white d-flex justify-content-between align-items-center shadow-sm">
          <p className="my-auto">Total de tu compra:</p>
          <span className="fw-bold">{formatPrice(total)}</span>
        </div>
        <div className="mt-3 bg-white shadow-sm">
          <Detalles carrito={carrito} />
        </div>
        <div className="mt-3 bg-white shadow-sm">
          <Comprador total={formatPrice(total)} pagar={handlePay} />
        </div>
      </div>
    </div>
  );
}
