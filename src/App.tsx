import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

/* Componentes */
import Footer from './components/footer/Footer';
import Navegacion from './components/Navegacion/Navegacion';

import Documentos from './components/documentos/Documentos';
import Home from './components/home/Home';
//import Articles from './components/articles/Articles';
import Hola from './components/hola';
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
          <Route path="/articulos">
          <Hola />
          </Route>
          <Route path="/documentos">
            <Documentos />
          </Route>
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
