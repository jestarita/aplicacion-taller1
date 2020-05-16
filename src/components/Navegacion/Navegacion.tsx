import React from 'react';
import {
  NavLink
} from "react-router-dom";

import './Navegacion.scss';
const Navegacion = () =>{
    return (
   
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Foro nodejs</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
               
          </ul>
        <ul className="navbar-nav navbar-right">
             <li className="nav-item" >
             <NavLink exact to="" className="nav-link" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item" >
            <NavLink exact to="articulos" className="nav-link" activeClassName="active">
                Articulos
              </NavLink>
            </li> 
            <li className="nav-item" >
            <NavLink exact to="documentos" className="nav-link" activeClassName="active">
                Documentos
              </NavLink>
            </li> 
            
        </ul>
        </div>
      </nav>
 
  

    )
}

export default Navegacion;