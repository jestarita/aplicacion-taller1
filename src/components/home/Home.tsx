import React from 'react';
import './Home.scss';

const Info1 = () =>{
    return (
        <div className="jumbotron mt-3 sm-4"> 
            <h2 className="display-4">Hola gente bienvenidos a mi aplicacion react</h2>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component 
            for calling extra attention to featured content or information.</p>
        </div>
    )
}

const Info2 = () =>{
    return (
        <div className="jumbotron mt-3 sm-4"> 
        <h2 className="display-4">Aprende mas acerca de react</h2>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component 
        for calling extra attention to featured content or information.</p>
    </div>
    )
}


const Home = () =>{
    return(
        <div>
        <h1 className="text-center mt-2">Bienvenido al aplicativo de react</h1>
        <div className="row">
            <div className="col-sm-12 col-xl-6 col-md-6">
                <Info1 />
            </div>
            <div className="col-sm-12 col-xl-6 col-md-6">
                <Info2 />
            </div>
        </div>
        </div>
    )
}

export default Home;