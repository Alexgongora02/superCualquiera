import React from "react";
import AsideAdmi from "./AsideAdmi";

export default function ContentAdmi() {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Panel de Control v3</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Panel de Control </li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">
                      Visitantes de la Tienda Online
                    </h3>
                    <a href="/">Vista Del Informe</a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <span className="text-bold text-lg">820</span>
                      <span>Visitante a lo largo del camino</span>
                    </p>
                    <p className="ml-auto d-flex flex-column text-right">
                      <span className="text-success">
                        <i className="fas fa-arrow-up" /> 12.5%
                      </span>
                      <span className="text-muted">Desde la Semana Pasada</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                  <div className="position-relative mb-4">
                    <canvas id="visitors-chart" height={200} />
                  </div>
                  <div className="d-flex flex-row justify-content-end">
                    <span className="mr-2">
                      <i className="fas fa-square text-primary" /> Esta Semana
                    </span>
                    <span>
                      <i className="fas fa-square text-gray" /> Semana Pasada
                    </span>
                  </div>
                </div>
              </div>
              {/* /.card */}
              <div className="card">
                <div className="card-header border-0">
                  <h3 className="card-title">Productos</h3>
                  <div className="card-tools">
                    <a href="/" className="btn btn-tool btn-sm">
                      <i className="fas fa-download" />
                    </a>
                    <a href="/" className="btn btn-tool btn-sm">
                      <i className="fas fa-bars" />
                    </a>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <table className="table table-striped table-valign-middle">
                    <thead>
                      <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Ventas</th>
                        <th>Mas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product 1"
                            className="img-circle img-size-32 mr-2"
                          />
                          Algunos Productos
                        </td>
                        <td>$13 USD</td>
                        <td>
                          <small className="text-success mr-1">
                            <i className="fas fa-arrow-up" />
                            12%
                          </small>
                          12,000 Vendida
                        </td>
                        <td>
                          <a href="/" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product 1"
                            className="img-circle img-size-32 mr-2"
                          />
                          Otro Producto
                        </td>
                        <td>$29 USD</td>
                        <td>
                          <small className="text-warning mr-1">
                            <i className="fas fa-arrow-down" />
                            0.5%
                          </small>
                          123,234 Vendida
                        </td>
                        <td>
                          <a href="/" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product 1"
                            className="img-circle img-size-32 mr-2"
                          />
                          Producto en Oferta
                        </td>
                        <td>$1,230 USD</td>
                        <td>
                          <small className="text-danger mr-1">
                            <i className="fas fa-arrow-down" />
                            3%
                          </small>
                          198 vendida
                        </td>
                        <td>
                          <a href="/" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product 1"
                            className="img-circle img-size-32 mr-2"
                          />
                          Articulo Preferido
                          <span className="badge bg-danger">NEW</span>
                        </td>
                        <td>$199 USD</td>
                        <td>
                          <small className="text-success mr-1">
                            <i className="fas fa-arrow-up" />
                            63%
                          </small>
                          87 Vendido
                        </td>
                        <td>
                          <a href="/" className="text-muted">
                            <i className="fas fa-search" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /.card */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Ventas</h3>
                    <a href="/">View Report</a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <span className="text-bold text-lg">$18,230.00</span>
                      <span>Sales Over Time</span>
                    </p>
                    <p className="ml-auto d-flex flex-column text-right">
                      <span className="text-success">
                        <i className="fas fa-arrow-up" /> 33.1%
                      </span>
                      <span className="text-muted">Desde el mes Pasado</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                  <div className="position-relative mb-4">
                    <canvas id="sales-chart" height={200} />
                  </div>
                  <div className="d-flex flex-row justify-content-end">
                    <span className="mr-2">
                      <i className="fas fa-square text-primary" /> Este Año
                    </span>
                    <span>
                      <i className="fas fa-square text-gray" /> Año Pasado
                    </span>
                  </div>
                </div>
              </div>
              {/* /.card */}
              <div className="card">
                <div className="card-header border-0">
                  <h3 className="card-title">
                    Descripcion general de la tienda en linea
                  </h3>
                  <div className="card-tools">
                    <a href="/" className="btn btn-sm btn-tool">
                      <i className="fas fa-download" />
                    </a>
                    <a href="/" className="btn btn-sm btn-tool">
                      <i className="fas fa-bars" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                    <p className="text-success text-xl">
                      <i className="ion ion-ios-refresh-empty" />
                    </p>
                    <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        <i className="ion ion-android-arrow-up text-success" />{" "}
                        12%
                      </span>
                      <span className="text-muted">Tasa de Conversion</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                    <p className="text-warning text-xl">
                      <i className="ion ion-ios-cart-outline" />
                    </p>
                    <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        <i className="ion ion-android-arrow-up text-warning" />{" "}
                        0.8%
                      </span>
                      <span className="text-muted">TASA DE VENTA</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="text-danger text-xl">
                      <i className="ion ion-ios-people-outline" />
                    </p>
                    <p className="d-flex flex-column text-right">
                      <span className="font-weight-bold">
                        <i className="ion ion-android-arrow-down text-danger" />{" "}
                        1%
                      </span>
                      <span className="text-muted">TASA DE REGISTRO</span>
                    </p>
                  </div>
                  {/* /.d-flex */}
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
}
