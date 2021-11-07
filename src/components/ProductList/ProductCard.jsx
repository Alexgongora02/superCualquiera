import React from "react";
import ProductDetails from "./ProductDetails";

export default function ProductCard({ product }) {
  const { producto, img, desc, precio, id } = product;
  return (
    <div className="d-flex col-sm-4 col-md-3 p-1">
      <div className="card text-center" style={{ width: "100%" }}>
        <button
          type="button"
          className="card flex-fill"
          data-bs-toggle="modal"
          data-bs-target={`#modal${id}`}
        >
          <img src={img} className="card-img-top" alt="product" />
          <div className="card-body mx-auto">
            <p className="text-danger fw-bold mb-0">$ {precio.toFixed(2)}</p>
            <h5 className="card-title text-capitalize">{producto}</h5>
            <p className="card-text fw-lighter" style={{ fontSize: ".9rem" }}>
              {desc}
            </p>
          </div>
        </button>
        <button className="btn btn-success">Carrito</button>
      </div>
      <ProductDetails product={product}/>
    </div>
  );
}
