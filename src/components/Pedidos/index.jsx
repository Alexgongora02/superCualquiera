import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";

export default function Pedidos() {
  const pedidos = useSelector((state) => state.pedidos);
  const [pedido, setPedido] = useState(false);
  const [id, setId] = useState("gt75ny2f0");
  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="container d-flex justify-content-center row mx-auto">
      {pedido && <Ticket pedido={pedido} />}
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
