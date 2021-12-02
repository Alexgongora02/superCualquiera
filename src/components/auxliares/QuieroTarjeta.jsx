import React from "react";
import { useHistory } from "react-router-dom";

export default function QuieroTarjeta() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tarjeta Solicitada");
    history.push("/");
  };

  return (
    <div className="container py-3">
      <header>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">EvuCard</h1>
          <img className="" src="./assets/tarjvsmc.png" alt="" />
          <p className="fs-5 text-muted">
            Una tareja para todos. Comprá en cualquier comercio o página web del
            mundo que acepte Mastercard.
          </p>
        </div>
      </header>

      <main>
        <div className="row text-center mb-3">
          <div className="col">
            <div
              className="card mb-4 rounded-3 shadow-sm"
              style={{ height: "100%" }}
            >
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">La tarjeta</h4>
              </div>
              <div className="p-2">
                <p className="fs-6 text-muted">
                  Una tarjeta prepaga Mastercard internacional diseñada para
                  tener la mejor experiencia de compra. Con chip, para que tu
                  información esté más protegida que nunca y tecnología
                  contactless, para que tus compras sean mucho más seguras.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card mb-4 rounded-3 shadow-sm"
              style={{ height: "100%" }}
            >
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">¿Viajas?</h4>
              </div>
              <div className="p-2">
                <p className="fs-6 text-muted">¡Llevá tu EvuCard de viaje!</p>
                <p className="fs-6 text-muted">
                  Hacé el aviso de viaje a través de la app y comprá con tu
                  EvuCard en cualquier parte del mundo al cambio del día. Miles
                  de supermercados, restaurantes, bares, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">¡Pedila ya!</h2>
        <form className="my-auto col-sm-4 mx-auto text-center"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-3">
            <input type="name" className="form-control" placeholder="Nombre" />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
            />
          </div>
          <button className="btn btn-primary">Pedir tarjeta</button>
        </form>
      </main>
    </div>
  );
}
