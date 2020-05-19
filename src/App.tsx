import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';

/* Componentes */
import Footer from './components/footer/Footer';
import Navegacion from './components/Navegacion/Navegacion';
import Documentos from './components/documentos/Documentos';
import Articulos from './components/Articulos/Articulos';
import Home from './components/home/Home';

function App() {
  return (
   
          <Router>
          <header>
            <div className="w-100">
            <Navegacion />
            </div>        
        </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12"> 
          <Switch>
          <Route path="/documentos">
            <Documentos />
          </Route>
          <Route path="/articulos">
            <Articulos />
          </Route>
          <Route path="/">
             <Home />
          </Route>
         
        </Switch>
        </div>
        </div>
    </div>
    <Footer />
  
 </Router>

  );
}

export default App;
