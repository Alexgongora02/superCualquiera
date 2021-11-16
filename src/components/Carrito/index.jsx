import React, { useState } from "react";
import "./carrito.css";
import ProductItem from "./ProductItem";

export default function Carrito() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={`card carrito ${show ? "mostrar" : "oculto"}`}>
      <div className="modal-header p-0 m-0 ">
        <button
          type="button"
          className="close mx-auto btn "
          onClick={handleClick}
        >
          Carrito <span aria-hidden="true">&times;</span>
        </button>
      </div>

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
    </div>
  );
}
