import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Carrito from "./Carrito";
import Searchbar from "./Searchbar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar(onSearch) {
  const { isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);
  const itemsCarrito = useSelector((state) => state.carrito.length);

  const handleShow = (e) => {
    const element = e.target.parentNode.parentNode.parentNode;
    element.classList.remove("show");
  };

  const handleClick = () => {
    setShow(!show);
  };

  const location = useLocation();
  const isDashboard = location.pathname === "/Dashboard";

  if (isDashboard) {
    return null;
  }
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top rounded-bottom">
        <div className="container container-fluid">
          <Link className="navbar-brand position-relative" to="/">
            <img
              className="bg-white rounded-circle p-1"
              src="./assets/logo.png"
              alt="logo"
              width="80"
            />
            <span
              className="position-absolute bottom-0 start-0 bg-light shadow px-1 text-primary rounded navbar-collapse collapse"
              style={{ marginLeft: "-9px", fontSize: "1rem" }}
            >
              SuperEvuca
            </span>
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
              <li className="nav-item">
                <Searchbar handleShow={handleShow} />
              </li>
              {isAuthenticated && (
                <li className="nav-item" onClick={handleShow}>
                  <Link className="nav-link text-white" to="/Dashboard">
                    Panel de Control
                  </Link>
                </li>
              )}
              <li className="nav-item" onClick={handleShow}>
                <Link className="nav-link text-white" to="/login">
                  Mi Cuenta
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
