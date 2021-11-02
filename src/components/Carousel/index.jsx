import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide my-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/300x100.png?text=Imagen+de+Super+Cualquiera+1"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>6 Cuotas sin interes con Visa</h5>
            <p>Valido para todos los productos de almacén los dias domingo</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/300x100.png?text=Imagen+de+Super+Cualquiera+2"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-success">
            <h5>¡15% de descuento!</h5>
            <p>Para todas tus compras online durante noviembre</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/300x100.png?text=Imagen+de+Super+Cualquiera+3"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-primary">
            <h5>2 x 1 en bebidas</h5>
            <p>Los dias miercoles y jueves</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
