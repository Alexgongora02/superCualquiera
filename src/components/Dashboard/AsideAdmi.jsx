import React from "react";

export default function AsideAdmi({ showUpload }) {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index1.html" className="brand-link">
        <img
          src="./assets/logo.png"
          alt=""
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">SuperEvuca</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <a href="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Panel De Control
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Panel De Control </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Poductos Destacados</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-light"
                onClick={() => showUpload((state) => !state)}
              >
                <i className="nav-icon fas fa-th" />
                <p>Subir Productos</p>
              </button>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
