import React from "react";
import { useParams } from "react-router-dom";

export default function Exito() {
  const { id } = useParams();
  console.log("Exito", id)

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
