import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { cancelarVenta } from "./../../store/actions/actions";

import Ticket from "./Ticket";

export default function Cancelar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidos);
  const [pedido, setPedido] = useState(false);
  const [id, setId] = useState("gt75ny2f0");
  const [errors, setErrors] = useState({});

  //function to check if was passed 10 minutes ago from a given date
  const checkTime = (date) => {
    const now = new Date();
    const time = new Date(date);
    const diff = now - time;
    const diffMinutes = Math.round(diff / 60000);
    return diffMinutes > 10;
  };

  const validateInput = (value) => {
    let error = {};
    if (value.length < 9 || value.length > 9)
      error.id = "El ID debe tener 9 caracteres";
    return error;
  };

  const handleBlur = (e) => {
    setErrors(validateInput(e.target.value));
  };

  const handleChange = (e) => {
    setErrors(validateInput(e.target.value));
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const result = pedidos.find((pedido) => pedido.id === id);
      setPedido(result);
      setId("");
    }
  };

  const handleCancel = () => {
    //ask for confirmation to dispatch the action
    if (window.confirm("¿Estás seguro de que deseas cancelar el pedido?")) {
      dispatch(cancelarVenta(pedido.id));
      setPedido(false);
      alert("Pedido cancelado");
      history.push("/");
    } else {
      alert("Pedido no cancelado");
      history.push("/");
    }
  };

  if (pedido) {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center row mx-auto">
        <Ticket pedido={pedido} />
        {checkTime(pedido.fechaPago) ? (
          <div className="alert alert-dismissible alert-secondary text-center">
            <strong>Oh no!</strong> Lamentablemente ya pasaron
            <span className="alert-link"> mas de 10 minutos</span>.
            <p className="text-muted mb-0"> Su pedido no se puede cancelar.</p>
          </div>
        ) : (
          <button
            className="btn btn-danger btn-sm fw-bold"
            onClick={handleCancel}
            style={{ maxWidth: "10rem" }}
          >
            Cancelar pedido
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center row mx-auto">
      <form
        className="card bg-light text-center px-0 col-sm-6 m-5 "
        style={{ maxWidth: "20rem", maxHeight: "12rem" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group card-header pt-3 pb-4">
          <label htmlFor="title">Codigo del pedido:</label>
          <input
            name="id"
            type="text"
            className={`form-control ${errors.id && "is-invalid"}`}
            value={id}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.id && errors.id}</div>
        </div>

        <div className="btn-group d-flex mx-auto py-3">
          <button type="submit" className={`btn btn-success`}>
            Buscar pedido
          </button>
        </div>
      </form>
    </div>
  );
}
