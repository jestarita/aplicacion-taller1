import React, { useState, useEffect  } from 'react';
//import MoviesService from '../../services/movies/Movies';
import axios from 'axios';

const baseurl = 'https://api-movies-free.herokuapp.com/api';
async function getMovies(){
    try{
        const response = await axios({
            url: `${baseurl}/movies`,
            method: `GET`
        })
        return response;
    }catch(e)
    {
        console.log(e);
    }
}

const Documentos = () =>{
   
    const [isLoading, SetisLoading] = useState(true); 
    const [Items, setItems] = useState([])

    
    useEffect( ()=>{
     

       async function loadMovies (){
        const respuesta = await getMovies()
        SetisLoading(true);
        console.log(respuesta?.data.results);
        setItems(respuesta?.data.results);
        
       }
       loadMovies();
    }, []);

 
  return(
      <div>
          
          {/* <ul>
        {Items.map((Item, index) => (
          <li key={index}>
            {Item.nombre} {Item.descripcion}
          </li>
        ))}
      </ul> */}
         
      </div>
  )
}

export default Documentos;