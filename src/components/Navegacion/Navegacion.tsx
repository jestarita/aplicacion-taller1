import React from 'react';

import {NavLink} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import './Navegacion.scss';
const Navegacion = () =>{
    return (
   
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
      // <a className="navbar-brand" href="/"> <img src="./imagenes/Logo.jpg" width="30" height="30" className="d-inline-block align-top" alt="inciio" /></a>
      //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarSupportedContent"
      //       aria-controls="NavbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //   <div className="collapse navbar-collapse" id="NavbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">
               
      //     </ul>
      //   <ul className="navbar-nav navbar-right">
      //        <li className="nav-item" >
      //        <NavLink exact to="/" className="nav-link" activeClassName="active">
      //           Inicio
      //         </NavLink>
      //       </li>
      //       <li className="nav-item" >
      //       <NavLink exact to="articulos" className="nav-link" activeClassName="active">
      //           Articulos
      //         </NavLink>
      //       </li> 
      //       <li className="nav-item" >
      //       <NavLink exact to="documentos" className="nav-link" activeClassName="active">
      //           Documentos
      //         </NavLink>
      //       </li>             
      //   </ul>
      //   </div>
      // </nav>
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src="./imagenes/Logo.jpg" width="30" height="30" className="d-inline-block align-top" alt="inciio" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
         
          </Nav>
          <Nav className="navbar-nav navbar-right">
             <li className="nav-item" >
               <NavLink exact to="/" className="nav-link" activeClassName="active">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar> 

    )
}

export default Navegacion;