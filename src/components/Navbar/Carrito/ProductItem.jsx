import React from "react";
import { useDispatch } from "react-redux";
import { removeCarrito } from "./../../../store/actions/actions";

export default function ProductItem({ item }) {
  const { producto, img, desc, precio, cantidad } = item;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCarrito(item.id));
  };

  return (
    <div className="card d-flex flex-row position-relative">
      <button
        className="btn position-absolute top-0 start-0"
        style={{ marginLeft: "-10px" }}
        onClick={handleRemove}
      >
        &#9940;
      </button>
      <p
        className="badge bg-info text-dark position-absolute top-50 start-0"
        style={{ marginLeft: "2px" }}
      >
        {cantidad}
      </p>
      <img
        className="card-img-top mx-1 my-auto"
        src={img}
        style={{ width: "5rem", height: "5rem" }}
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{producto}</h5>
        <small
          className="card-text"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title={desc}
        >
          {desc.substring(0, 17)}...
        </small>
      </div>
      <div className="card-body my-auto">
        <h5
          className="card-title text-muted"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={`Precio por unidad: $${precio.toFixed(2)}`}
        >
          $ {(precio * cantidad).toFixed(2)}
        </h5>
      </div>
    </div>
  );
}
