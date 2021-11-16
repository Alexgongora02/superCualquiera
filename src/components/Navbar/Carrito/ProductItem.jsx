import React from "react";

export default function ProductItem() {
  return (
    <div className="card d-flex flex-row">
      <img
        className="card-img-top mx-1 my-auto"
        src="https://via.placeholder.com/150"
        style={{ width: "5rem", height: "5rem" }}
        alt="Card"
      />
      <div class="card-body">
        <h5 class="card-title">Producto</h5>
        <small class="card-text">Parte de la descripcion</small>
      </div>
      <div class="card-body my-auto">
        <h5 class="card-title">$25,00</h5>

      </div>
    </div>
  );
}
