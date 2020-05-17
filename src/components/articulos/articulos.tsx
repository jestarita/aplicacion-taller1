import React from 'react';
import './articulos.scss';

const Articulo = (props:any) =>{
    return(
        <div className="col-sm-4 col-md-6 col-xl-4">
        <div className="card mt-3">
                <img src={props.imagen} className="card-img-top" alt="play-4"/>
            <div className="card-body">
                <h4 className="card-title text-center titulo-tarjeta">{props.titulo}</h4>
                <p className="card-text descripcion">{props.descripcion}</p>
            </div>
        </div>
    </div>
    )
}

const Articulos  = () =>{
    return (
        <div>
            <h3 className="text-center mt-2">Listado de articulos</h3>
            <div className="row">
           <Articulo imagen='./Productos/portatil.jpg' titulo='Laptop asus 2020'
                    descripcion='equipo para videojuegos' />
            <Articulo imagen='./Productos/Audifonos_samsung.png' titulo='Audifonos samsung'
                    descripcion='elementos de utilidad para escuchar musica' />
            <Articulo imagen='./Productos/Celular_samsung.jpg' titulo='Samsung Galaxy S20'
                    descripcion='Dispositivo Movil de utilidad para ser usado para multiples funciones.' />
            <Articulo imagen='./Productos/ps4.jpg' titulo='PlayStation 4 1 Tb'
                    descripcion='Consola para jugar gran variedad de juegos de la playstation store
                     o juegos comprados' />
            <Articulo imagen='./Productos/reloj_inteligente.jpg' titulo='Reloj Inteligente'
                    descripcion='Reloj Digital que tiene multiples funciones' />
            <Articulo imagen='./Productos/impresora.jpg' titulo='Impresora Hp'
                descripcion='Dispositovo para realizar impresiones de documentos desde el computador o smartphone' />
            </div>
        </div>
       
    )
}

export default Articulos;