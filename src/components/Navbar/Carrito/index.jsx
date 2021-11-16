import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "./carrito.css";

export default function Carrito({ close, show }) {
  return (
    <div className={`card carrito ${show ? "mostrar" : "oculto"}`}>
      <div className="card-body d-flex flex-column gap-1 bg-white m-3 p-1">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="card-footer d-flex flex-column align-items-center">
        <div className="d-flex gap-1">
          <p className="py-1 px-2 btn-light rounded-0">Total:</p>
          <p className="py-1 px-2 btn-light rounded-0">$0</p>
        </div>
        <button className="btn btn-success mx-auto">Comprar</button>
      </div>
      <span className="btn text-primary badge rounded-pill bg-warning mx-auto" onClick={close}>^</span>
    </div>
  );
}
