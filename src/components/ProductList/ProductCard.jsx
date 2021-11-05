import React from "react";

export default function ProductCard({ product }) {
  const { producto, img, desc, precio } = product
  return (
    <div className="card text-center col-sm-4 col-md-3 mx-auto">
      <img
        src={img}
        className="card-img-top"
        alt="product"
      />
      <div className="card-body">
        <p className="text-danger fw-bold mb-0">$ {precio.toFixed(2)}</p>
        <h5 className="card-title text-capitalize">{producto}</h5>
        <p className="card-text fw-lighter" style={{ fontSize: ".9rem" }}>{desc}</p>
      </div>
      <button className="btn btn-success">Carrito</button>
    </div>
  );
}
