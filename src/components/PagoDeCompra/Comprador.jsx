import React, { useState } from "react";
import Cargando from "./../../utils/Cargando";
import "./compra.css";

export default function Comprador({ total, pagar }) {
  const [pagando, setPagando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPagando(true);
    setTimeout(() => {
      e.target.reset();
      setPagando(false);
      pagar();
    }, 2000);
  };
  return (
    <form className="p-3 shadow-sm" onSubmit={handleSubmit}>
      <h5 className="card-title">
        <span className="ml-2">Datos del comprador</span>
      </h5>

      <div className="form-group">
        <label className="col-form-label mt-4" htmlFor="Nombre">
          Nombre
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
        />
      </div>

      <div className="form-group">
        <label className="col-form-label mt-4" htmlFor="Email">
          Email
        </label>
        <input
          required
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label className="col-form-label mt-4" htmlFor="Dirección">
          Dirección
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="direccion"
          placeholder="Dirección"
        />
      </div>

      <div className="form-group">
        <label className="col-form-label mt-4" htmlFor="Ciudad">
          Ciudad
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="ciudad"
          placeholder="Ciudad"
        />
      </div>

      <div className="form-group" id="tarjeta">
        <label className="col-form-label mt-4" htmlFor="Ciudad">
          Tarjeta
        </label>
        <div className="form-control">
          <input
            required
            type="text"
            id="numeroTarjeta"
            className=" p-0 col-7"
            placeholder="Numero de la tarjeta"
          />
          <input
            required
            type="text"
            id="fecha"
            className=" p-0 col-3"
            placeholder="MM / AA"
          />
          <input
            required
            type="text"
            id="CVC"
            className=" p-0 col-2"
            placeholder="CVC"
          />
        </div>
      </div>
      <div className="form-group mt-4 text-center">
        <button
          type="submit"
          className={`btn btn-primary ${pagando && "disabled"}`}
        >
          {pagando ? <Cargando /> : `Pagar ${total}`}
        </button>
      </div>
    </form>
  );
}
