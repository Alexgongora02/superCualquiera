import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(onSearch) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top rounded-bottom">
      <div className="container container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="bg-white rounded-circle p-1"
            src="./assets/logo.png"
            alt="logo"
            width="80"
          />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbar">
          <ul
            className="navbar-nav d-flex justify-content-around"
            style={{ width: "100%" }}
          >
            <li className="nav-item">
              <Link className="nav-link dropdown-toggle"  to="/Categorias" style={{color:"white"}}>
                Categorias
              </Link>
            </li>

            <form className="form-inline d-flex">
              <input
                className="form-control"
                type="text"
                placeholder="Buscar"
              />
              <button type="button" className="btn btn-light btn-outline-dark">
                Buscar
              </button>
            </form>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/Lista">
                Lista
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Ingresar">
                Ingresar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
