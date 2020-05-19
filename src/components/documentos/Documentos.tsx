
import React, {useState, useEffect, Fragment } from 'react';
import MoviesService from '../../services/movies/Movies';
import './Documentos.scss';

const Listado = (props:any)=>{

  return(
    <div className="col-sm-12 col-md-4 col-xl-4" key={props.title}>
      <div className="card mt-3 mx-2 tarjeta-pelicula">
      <img className="card-img-top imagen-pelicula" src={props.imagen} alt={props.title}  />
        <div className="card-body cuerpo-pelicula">
            <h2 className="text-center titulo-pelicula">{props.title}</h2>
         
            <p className="text-justify descripcion-pelicula">
              {props.description}
            </p>
        </div>
      </div>
      
    </div>
  )
}

const Loading = () =>{
  
   return(
    <div className="col-sm-12 text-center float-sm-right mt-3">
    <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
    <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
    <circle cx="170" cy="170" r="135" stroke="#404041"/>
    <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
    <circle cx="170" cy="170" r="85" stroke="#404041"/>
  </svg>
  </div>
   )
}

const Documentos = () =>{
  const [data, setData] = useState({ results: [] as any });
  const [cargado, setCargado] = useState(false);
  useEffect(() => {
    ObtenerPeliculas();
  }, []);

  const ObtenerPeliculas = () => {
    MoviesService.getMovies()
      .then(response => {
        setData(response.data);
        setCargado(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

    return(
      <div className="row">
        {
          !cargado ?(<Loading />):(<Fragment>
            {data.results.sort((a:any, b:any) => a.nombre > b.nombre ? 1 : -1).map((movie:any) => (
              <Listado imagen={movie.image} title={movie.nombre}
              description={movie.descripccion} key={movie.nombre} />
            ))} 
          </Fragment>
          )
        }
      </div>
      )
  
}

export default Documentos;