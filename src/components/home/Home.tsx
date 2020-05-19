import React, {Fragment} from 'react';
import './Home.scss';
import Nota1 from './components/nota1/Nota1';
import Nota2 from './components/nota2/Nota2';

const Home = () =>{
    return(
       <Fragment>
        <h1 className="text-center mt-2">Bienvenido al aplicativo de react</h1>
        <div className="row">
            <div className="col-sm-12 col-xl-6 col-md-6">
                <Nota2 />
            </div>
            <div className="col-sm-12 col-xl-6 col-md-6">
                <Nota1 />
            </div>
        </div>
        
        <br /><br />
        </Fragment>
    )
}

export default Home;