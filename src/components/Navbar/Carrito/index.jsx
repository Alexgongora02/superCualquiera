import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./carrito.css";

export default function Carrito({ close, show }) {
  //get carrito from redux with useSelector
  const carrito = useSelector((state) => state.carrito);
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const history = useHistory();

  const handlePay = () => {
    history.push("/pago");
    close();
  };

  return (
    <div className={`card carrito ${show ? "mostrar" : "oculto"}`}>
      {carrito.length > 0 ? (
        <>
          <div className="card-body d-flex flex-column gap-1">
            {carrito.map((producto) => (
              <ProductItem key={producto.id} item={producto} />
            ))}
          </div>
          <div className="card-footer d-flex flex-column align-items-center">
            <div className="d-flex gap-1">
              <p className="py-1 px-2 my-auto">Total:</p>
              <p className="py-1 px-2 fs-4 my-auto text-success">
                $ {total.toFixed(2)}
              </p>
            </div>
            <button className="btn btn-success mx-auto" onClick={handlePay}>
              Finalizar pedido
            </button>
            <small className="p-1">¡Envío a domicilio disponible!</small>
          </div>
        </>
      ) : (
        <div className="alert alert-dismissible alert-primary text-center">
          <strong>¡Oh no!</strong>
          <p className="m-0">¡Tu carrito está vacío!</p>
        </div>
      )}
      <span className="btn mx-auto fs-3" onClick={close}>
        &#9757;
      </span>
    </div>
  );
}
