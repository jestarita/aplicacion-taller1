import React from 'react'
import { Link } from 'react-router-dom';

const Nota2  = () =>{

    return(
        <div className="jumbotron mt-3 sm-4"> 
        <h2 className="display-4">Aprende mas acerca de react</h2>
        <p className="lead">puedes mirar a detalle todo lo relacionado a articulos disponibles <br />  haciendo click en siguiente boton te llevara a la pestaña derecha de la barra de navegacion</p>

        <Link to="articulos">
            <button type="submit" className="btn btn-info">Articulos </button>
            </Link>
    </div>
    )
}

export default Nota2;