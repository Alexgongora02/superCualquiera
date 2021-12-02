import React from "react";
import { useHistory } from "react-router";

export default function Form() {
  const history = useHistory();
  const handleSubmit = function (e) {
    e.preventDefault();

    alert("Gracias por enviarnos tu consulta");
    history.push("/");
  };

  return (
    <section className="mb-4 p-3">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contactanos
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        ¿Tienes usted alguna pregunta? Por favor no dudes en contactar con
        nosotros directamente. Nuestro equipo se pondrá en contacto contigo en
        cuestión de horas para ayudarte.
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5 mx-auto">
          <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-3">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-3">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Asunto"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
