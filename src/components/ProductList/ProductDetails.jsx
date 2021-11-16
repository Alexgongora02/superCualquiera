import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCarrito } from "../../store/actions/actions";

export default function ProductDetails({ product }) {
  const { producto, img, desc, precio, id, stock } = product;
  const [amount, setAmount] = useState(1);
  const [disponible, setDisponible] = useState(stock);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (disponible > 0) {
      dispatch(addCarrito(product, amount));
      setAmount(1);
    }
    document.getElementById(id).click();
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setDisponible(disponible + 1);
    }
  };
  const increase = () => {
    if (amount < 10) {
      setAmount(amount + 1);
      setDisponible(disponible - 1);
    }
  };

  return (
    <div
      className="modal fade"
      id={`modal${id}`}
      tabIndex="-1"
      aria-labelledby={`${id}ModalLabel`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-capitalize" id={`${id}ModalLabel`}>
              {producto}
            </h5>
            <button
              id={id}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-column flex-sm-row text-center justify-content-center">
            <div className="container">
              <img src={img} alt={producto} width="100%" />
            </div>

            <div className="container d-flex flex-column justify-content-center p-2">
              <p className="text-danger fs-1 fw-bold">$ {precio.toFixed(2)}</p>
              <h5 className="card-title text-capitalize">{producto}</h5>
              <p className="card-text fw-light">{desc}</p>
              <small className="text-muted">Disponibles: {disponible}</small>
            </div>
          </div>
          <div className="modal-footer d-flex flex-column">
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-secondary px-3"
                onClick={decrease}
              >
                -
              </button>
              <p className="p-1 mx-3 my-auto fs-3">{amount}</p>
              <button
                type="button"
                className="btn btn-secondary px-3"
                onClick={increase}
              >
                +
              </button>
            </div>
            <span className="badge bg-success">
              $ {(precio * amount).toFixed(2)}
            </span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
