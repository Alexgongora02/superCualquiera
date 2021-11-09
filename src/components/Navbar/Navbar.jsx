import React from "react"
import "./Navbar.css";

export default function Navbar(onSearch) {
    return (
    <container>
            
        <nav className="navbar navbar-expand-lg navbar-ligh bg-ligh">
              <a className="navbar-brand"style={{color:'black'}} >logo</a>
   
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <a className="nav-link" href=""style={{color:'black',padding:'20px'}}>Categorias</a>
               
             </li>
                   <nav class="navbar">
                     <form class="form-inline">
                           <input className="text" type="text" placeholder="Buscar"></input>
                           <button type="button" class="btn btn-outline-dark">Buscar</button>
                       </form>
         </nav>
      
                 <li className="nav-item">
                   <a className="nav-link" href="#"style={{color:'black',width:'7rem',padding:'20px'}}>Lista</a>
                 </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#"style={{color:'black',width:'7rem',padding:'20px'}}>Ingresar</a>
         </li>
         <li class="nav-item">
               <a className="nav-link" href="#"style={{color:'black',padding:'20px'}}>Carrito</a>
         </li>
              </ul>
   
             </div>
                </nav>
         
    </container>
      
          
     

        
 )
  }