import React from "react";
import "./Navbar.css";

export default function Navbar(onSearch) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary rounded-bottom">
      <div className="container container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./assets/logo.png" alt="logo" width="80" />
        </a>
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
          <ul className="navbar-nav d-flex justify-content-around" style={{width: "100%"}}>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Categorias
              </a>
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
              <a className="nav-link" href="/">
                Lista
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Ingresar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Carrito
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
