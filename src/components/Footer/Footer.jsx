import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="top-footer">
        <div className="container">
          <div className="row text-center">
            <div className=" py-1 col-sm-4 mx-auto">
              <div className="card" style={{ height: "100%" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold">Ofertas en tu email</h5>
                  <p className="card-text">
                    Recibí antes que nadie ofertas limitadas
                  </p>
                  <Link to="/newsletter" className="btn btn-success">
                    Suscribite
                  </Link>
                </div>
              </div>
            </div>

            <div className=" py-1 col-sm-4 mx-auto">
              <div className="card" style={{ height: "100%" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold">Revisa tu compra</h5>
                  <p className="card-text">
                    Con el ID podrás ver el tiket y envío.
                  </p>
                  <Link to="/pedidos" className="btn btn-success">
                    Revisar
                  </Link>
                </div>
              </div>
            </div>
            <div className=" py-1 col-sm-4 mx-auto">
              <div className="card" style={{ height: "100%" }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold">Botón del Panico</h5>
                  <p className="card-text">
                    Si pagaste tu compra hace menos de 10 minutos podes
                  </p>
                  <Link to="/cancelar" className="btn btn-success">
                    Cancelarla
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer text-white">
        <div className="container row mx-auto">
          <div className="col-sm-4 p-4">
            <h4 className="text-ligth fw-bold">Nuestra Tarjeta</h4>
            <ul className="list-unstyled">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/ Quiero mi tarjeta">
                  Quiero mi tarjeta
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Acceso clientes">
                  Acceso clientes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/form">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 p-4">
            <h4 className="text-ligth fw-bold"> Preguntas Frecuentes</h4>
            <ul className="list-unstyled">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/Terminos y condiciones"
                >
                  Terminos y condiciones
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/Defensa de los consumidores"
                >
                  Defensa de los consumidores
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/Contanos tu experiencia"
                >
                  Contanos tu experiencia
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 p-4">
            <h4 className="text-ligth fw-bold"> SuperCualquiera</h4>
            <ul className="list-unstyled">
              <li>Sociedad Anonima Importadora y Exportadora</li>
              <li>Cuit:30-2588888954-15</li>
              <li>Sospecha 285 Las Parejas</li>
            </ul>
          </div>
        </div>

        <p className="col-sm-12 text-center text-white bg-dark py-3 mb-0">
          Acepto terminos y condiciones © SuperCualquiera
        </p>
      </div>
    </footer>
  );
}
