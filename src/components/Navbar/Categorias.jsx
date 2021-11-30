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
          
          
        
        <a className="list-group-item list-group-item-action"  
        id="list-profile-list" 
        data-toggle="list" 
        href="#list-profile" 
        role="group"> 
        
            Bebidas
            </a>
        <a className="list-group-item list-group-item-action" 
        id="list-messages-list" 
        data-toggle="list" 
        href="#list-messages" 
        role="group">
        
            Masitas
            </a>
          <a className="list-group-item list-group-item-action" 
           id="list-settings-list" 
           data-toggle="list" 
           href="#list-settings"
           role="group">
           
            Lacteos
          </a>
      </div>
    </div>
    <div className="col-8">
      <div className="tab-content" 
      id="nav-tabContent">
        <div className="tab-pane fade show active" 
          id="list-home" 
          role="group"
          aria-labelledby="list-home-list">...
        </div>
        <div className="tab-pane fade" 
          id="list-profile" 
          role="group"
          aria-labelledby="list-profile-list">...
        </div>
        <div className="tab-pane fade" 
           id="list-messages"
           role="group" 
           aria-labelledby="list-messages-list">...
         </div>
        <div className="tab-pane fade" 
           id="list-settings" 
           role="group" 
           aria-labelledby="list-settings-list">...
        </div>
      </div>
    </div>
  </div>
  )
}
