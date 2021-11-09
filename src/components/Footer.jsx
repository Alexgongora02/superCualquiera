import React from 'react'
import "./Footer.css"

export default function Footer() {
return(
    <><div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recibe Ofertas en tu email</h5>
            <p className="card-text">Tenes dudas podemos ayudarte 📞0800-444-53864</p>
            <a href="#" className="btn btn-primary">Suscribite</a>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Para cancelar tu compra</h5>
            <p className="card-text">Boton de arrepentimiento para cancelar tu compra</p>
            <a href="#" className="btn btn-primary">Hace click acá</a>
          </div>
        </div>
      </div>
    </div>



      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h4>Nuestra Tarjeta</h4>
              <ul className="list-unstyled">
                <li>Quiero mi tarjeta</li>
                <li>Acceso clientes</li>
                <li> Contactanos</li>
              </ul>
              </div>


          <div className="row">
            <div className="col-sm-4"></div>
              <h4> Preguntas Frecuentes</h4>
              <ul className="list-unstyled">
                <li> Terminos y condiciones</li>
                <li>Defensa de las y los consumidores</li>
                <li>Contanos tu experiencia  </li>
              </ul>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-4">
              <h4> SuperCualquiera</h4>
              <ul className="list-unstyled">
                <li>Sociedad Anonima Importadora y Exportadora</li>
                <li>Cuit:30-2588888954-15</li>
                <li>Sospecha 285 Las Parejas</li>
              </ul>
            </div>
          </div>

          
              <div className="row">
                <p className="col-sm">Acepto terminos y condiciones @SuperCualquiera</p>
              </div>
            </div>
          </div>
        
  
    </>
  )
}