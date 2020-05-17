
import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Documentos = () =>{
  const [data, setData] = useState({ results: [] as any });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api-movies-free.herokuapp.com/api/movies',
      );
      setData(result.data);

    };
 
    fetchData();
  }, []); 
    return(
    <div>
        <ul>
      {data.results.map((item:any) => (
        <li key={item.nombre}>
          {item.nombre}
        </li>
      ))} 
    </ul>
    </div>
    )
      
    
}

export default Documentos;