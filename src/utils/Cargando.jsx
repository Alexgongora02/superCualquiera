import React from "react";

export default function Cargando() {
  return (
    <div className="spinner-border" role="status" style={{height: "1rem", width: "1rem"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
