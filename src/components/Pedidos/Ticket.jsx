import React from "react";
import "./ticket.css";
import { remaining, formatDate } from "./utils";

export default function Ticket({ pedido }) {
  // check if the date already passed
  const date = new Date(pedido.fechaEntrega);
  const entregado = date < new Date();



  return (
    <>
      <div className="alert alert-info mt-3 text-center">
        <h4 className="alert-heading">
          Fecha de entrega: <strong>{formatDate(pedido.fechaEntrega)}</strong>
        </h4>
        {entregado ? <p className="mb-0">
          Su pedido fue entregado con exito!
        </p> : 
        <p className="mb-0">
          Su pedido será entregado en {remaining(pedido.fechaEntrega)}
        </p>
        }
      </div>
      <div className="ticket">
        <div className="container">
          <div className="ticket-header">
            <p>SUPEREVUCA S.R.L</p>
            <p>CUIT 30707047085</p>
            <p>CABILDO Nº 742</p>
            <p>MARCOS JUAREZ</p>
            <p>P.V. INTERNET</p>
            <p>NO. T. 00028693</p>
            <p>{formatDate(pedido.fechaPago)}</p>
          </div>
          <div className="ticket-body">
            <ul className="producto">
              {pedido.carrito.map((producto) => (
                <li className="item" key={producto.id}>
                  <span>
                    {`${producto.producto.toUpperCase()} [${
                      producto.cantidad
                    }]`}
                  </span>
                  <span>{`${producto.precio.toFixed(2)}`}</span>
                </li>
              ))}
            </ul>
            <p className="item">
              <strong>TOTAL:</strong>
              <strong>${pedido.total.toFixed(2)}</strong>
            </p>
          </div>
          <div className="ticket-footer text-center">
            <p>IVA RESPONSABLE INSCRIPTO A CONSUMIDOR FINAL</p>
            <p>
              <em>CF</em> ETA32000023 <em>DGI</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
