import React from "react";
import { useHistory } from "react-router-dom";

//Componet with a form to subscribe to the newsletter
export default function SubNewsletter() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por suscribirte");
    history.push("/");
  };

  return (
    <div className="sub-newsletter p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sub-newsletter__content">
              <h2 className="sub-newsletter__title">
                ¡Suscríbete a nuestro Newsletter!
              </h2>
              <p className="sub-newsletter__text">
                A través de nuestra newsletter y boletín de noticias te
                mantendremos informado a diario de todas nuestras ofertas y las
                noticias más importantes. Actualmente,{" "}
                <strong>1.016 usuarios registrados </strong> ya disfrutan de
                nuestra newsletter.
              </p>
              <p>
                Regístrate ahora totalmente gratis para recibir todas nuestras
                novedades en tu correo electrónico. Además, como usuario
                registrado podrás disfrutar de ofertas exclusivas.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center my-auto">
            <img
              className="bg-white rounded-circle p-1"
              src="./assets/logo.png"
              alt="logo"
              width="150"
            />
            <form className="my-auto" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="name"
                  className="form-control"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              <button className="btn btn-primary">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
