import React from "react";
import { useSelector } from "react-redux";

export default function Categorias({ setFilter, filter }) {
  const categorias = useSelector((state) => state.categorias);

  return (
    <div className="btn-group mx-auto my-4 d-flex flex-wrap" role="group">
      <button
        type="button"
        className={`btn btn-outline-primary rounded-0 ${!filter && `active`}`}
        onClick={() => setFilter(false)}
        >
         Todos
        </button>
      {categorias.map((categoria) => (
        <button
          type="button"
          className={`btn btn-outline-primary rounded-0 text-capitalize ${filter === categoria && `active`}`}
          key={categoria}
          onClick={() => setFilter(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
