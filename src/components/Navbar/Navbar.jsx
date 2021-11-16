import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";


export default function Navbar(onSearch) {
  const [show, setShow] = useState(false);
  const itemsCarrito = useSelector((state) => state.carrito.length);

  const handleShow = (e) => {
    const element = e.target.parentNode.parentNode.parentNode;
    element.classList.remove("show");
  };

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
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
              className="navbar-nav d-flex justify-content-around align-items-center"
              style={{ width: "100%" }}
            >
              <li className="nav-item" onClick={handleShow}>
                <Link className="nav-link text-white" to="/categorias">
                  Categorias
                </Link>
              </li>

              <form className="form-inline d-flex">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Buscar"
                />
                <button
                  type="button"
                  className="btn btn-light btn-outline-dark"
                  onClick={handleShow}
                >
                  Buscar
                </button>
              </form>

              <li className="nav-item" onClick={handleShow}>
                <Link className="nav-link text-white" to="/Lista">
                  Lista
                </Link>
              </li>
              <li className="nav-item" onClick={handleShow}>
                <Link className="nav-link text-white" to="/Ingresar">
                  Ingresar
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-link text-white btn-success px-2 position-relative"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                  onClick={handleClick}
                >
                  Carrito
                  {itemsCarrito > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {itemsCarrito}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carrito close={handleClick} show={show} />
    </>
  );
}
