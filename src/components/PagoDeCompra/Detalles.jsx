import React from "react";
import { formatPrice } from "./index";
import "./compra.css";

export default function Detalles({ carrito }) {
  return (
    <div className="accordion" id="detalles">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Detalles
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#detalles"
        >
          <table className="table table-hover table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody className="">
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.producto}</td>
                  <td>{formatPrice(item.precio)}</td>
                  <td>{item.cantidad}</td>
                  <td>{formatPrice(item.precio * item.cantidad)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
