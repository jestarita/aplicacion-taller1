import React from 'react';
import './Home.scss';

const Info1 = () =>{
    return (
        <div className="jumbotron mt-3 sm-4"> 
            <h1 className="display-4">Hola gente bienvenidos a mi aplicacion react</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component 
            for calling extra attention to featured content or information.</p>
            <hr className="my-4" />       
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
            </p>
        </div>
    )
}


const Home = () =>{
    return(
        <div className="contenedor">
            <h1>Bienvenido al aplicativo de react</h1>
                <Info1 />
        </div>
        
    )
}

export default Home;