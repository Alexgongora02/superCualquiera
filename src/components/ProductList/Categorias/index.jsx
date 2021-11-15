import React from "react";
import { useSelector } from "react-redux";

export default function Categorias() {
  const categorias = useSelector((state) => state.categorias);
  return (
    <div className="btn-group mx-auto my-4 d-flex flex-wrap" role="group">
      <button type="button" className="btn btn-outline-primary rounded-0">
        Almacén
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Lacteos
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Conservas
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Fresco
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Bebidas
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Higiene
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Limpieza
      </button>
      <button type="button" className="btn btn-outline-primary rounded-0">
        Perfumeria
      </button>
    </div>
  );
}
