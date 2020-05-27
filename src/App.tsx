import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
/* Componentes */
import Footer from './components/footer/Footer';
import Navegacion from './components/Navegacion/Navegacion';
import Articulos  from './components/articulos/Articulos';
//import Documentos from './components/documentos/Documentos';
import Home from './components/home/Home';

function App() {
  return (
          <Router>            
          <header>          
            <Navegacion />
          </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12"> 
          <React.StrictMode>
          <Switch>
          <Route path="/documentos">
            <Articulos />
          </Route>
          {/* <Route path="/documentos">
            <Documentos />
          </Route> */}
          <Route path="/">
             <Home />
          </Route>
         
        </Switch>
        </React.StrictMode>
        </div>
        </div>
    </div>
    <Footer />
  
 </Router>

  );
}

export default App;
