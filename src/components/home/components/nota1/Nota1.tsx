import React from 'react'
import { Link } from 'react-router-dom';

const Nota1  = () =>{

    return(
        <div className="jumbotron mt-3 sm-4"> 
            <h2 className="display-4">Hola gente bienvenidos a mi aplicacion react</h2>
            <p className="lead">aqui podras encontrar nuevo material que pueda ser de utilidad para seguir aprendiendo reactjs. El boton te enviara a la pestaña de Documentos</p>
           

            <Link to="documentos">
            <button type="submit" className="btn btn-primary">Documentos </button>
            </Link>
        </div>
    )
}

export default Nota1;