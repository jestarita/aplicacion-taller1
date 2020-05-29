import React, {Fragment} from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';
const Notas = (props:any) =>{

    return(
        <div className="col-sm-12 col-xl-6 col-md-6" key={props.id}>
            <div className="jumbotron mt-3 sm-4 "> 
                <h2 className="display-4 titulo">{props.titulo}</h2>
                <br />
                <p className="lead info-home">{props.parrafo}</p>
                <Link to={props.ruta}>
                <button type="submit" className="btn btn-primary boton">{props.ruta} </button>
                </Link>
            </div>
      </div>
    )
}

const Home = () =>{


    const listado = [
        {id:1, titulo: 'Hola gente bienvenidos a mi aplicacion react', parrafo:'aqui podras encontrar nuevo material que pueda ser de utilidad para seguir aprendiendo reactjs. El boton te enviara a la pestaña de documentos', ruta:'documentos'},
        {id:2, titulo: 'Aprende mas acerca de react', parrafo:'puedes mirar a detalle todo lo relacionado a articulos disponibles \n  haciendo click en siguiente boton te llevara a la pestaña derecha de la barra de navegacion', ruta:'articulos'}
    ]

    return(
       <Fragment>
        <h1 className="text-center mt-2 principal">Bienvenido al aplicativo de react</h1>
        <div className="row home">
            {listado.map(item =>(
                <Notas key={item.id} titulo={item.titulo} parrafo={item.parrafo} ruta={item.ruta}  />
            ))}
        </div>
        </Fragment>
    )
}

export default Home;