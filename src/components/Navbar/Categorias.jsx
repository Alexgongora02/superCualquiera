import React from "react";
import { useSelector } from "react-redux";

export default function Categorias({ setFilter, filter }) {
  const categorias = useSelector((state) => state.categorias);

  return (
  <div className="row">
    <div className="col-4">
      <div className="list-group" 
              id="list-tab" 
              role="group">
                <a className="btn btn-outline-primary"
                  id="list-home-list" 
                  role="tab">
                  Almacen
                </a> 
              <a className="btn btn-outline-primary"  
               id="list-profile-list" 
               data-toggle="list" 
               href="#list-profile" 
               role="group"> 
                Bebidas
              </a>
          
        
        
           
            <a className="btn btn-outline-primary" 
              id="list-messages-list" 
              data-toggle="list" 
              href="#list-messages" 
              role="group">
              Masitas
            </a>
            
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Lacteos
          </a>
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Perfumeria
          </a>
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Verduleria
          </a>
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Frescos
          </a>
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Carniceria
          </a>
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Limpieza
          </a>
          <a className="btn btn-outline-primary" 
             id="list-settings-list" 
             data-toggle="list" 
             href="#list-settings"
             role="group">
            Conservas
          </a>
          

      </div>
    </div>
  </div>  

        
      
  
  
  )
}
