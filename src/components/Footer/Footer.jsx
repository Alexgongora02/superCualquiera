import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="top-footer">
        <div className="row text-center gap-2">
          <div className="card col-sm-5 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title fw-bold">Recibe Ofertas en tu email</h5>
              <p className="card-text">
                Tenes dudas podemos ayudarte 📞0800-444-53864
              </p>
              <Link to="/" className="btn btn-success">
                Suscribite
              </Link>
            </div>
          </div>
          <div className="card col-sm-5 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title fw-bold">Para cancelar tu compra</h5>
              <p className="card-text">
                Boton de arrepentimiento para cancelar tu compra
              </p>
              <Link to="/" className="btn btn-success">
                Cancelar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer text-white">
        <div className="container row">
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
              <Link className="nav-link text-white" to="/Terminos y condiciones">
              Terminos y condiciones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Defensa de los consumidores">
              Defensa de los consumidores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contanos tu experiencia">
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

        <p className="col-sm-12 text-center text-white bg-dark">
          Acepto terminos y condiciones © SuperCualquiera
        </p>
      </div>
    </footer>
  );
}
