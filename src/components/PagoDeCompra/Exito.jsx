import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Ticket from "../Pedidos/Ticket";

export default function Exito() {
  const { id } = useParams();
  const pedidos = useSelector((state) =>
    state.pedidos.find((pedido) => pedido.id === id)
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div
      className="container d-flex justify-content-center row mx-auto"
      style={{ maxWidth: "40rem" }}
    >
      <div className="alert text-center alert-success mb-0">
        <p className="fs-3">Compra realizada con éxito!</p>
        <p>
          Este es el codigo de tu pedido:
          <strong>
            <code className="text-black fs-5 bg-light px-2 py-1">{id} </code>
          </strong>
        </p>
      </div>
      <Ticket pedido={pedidos} />
    </div>
  );
}
