import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
//import Nav from './components/Nav';

function Nav() {
   return (
      <Router>
         <div className="container">
            <nav className="navbar navbar-default">
               <div className="container-fluid">
                  <div id="navbar" className="navbar-collapse collapse">
                     <ul className="nav navbar-nav">
                        <li><NavLink className="active" to="/home">Home</NavLink></li>
                        <li><NavLink to="/add">Agregar</NavLink></li>
                        <li><NavLink to="/edit">Editar</NavLink></li>
                        <li><NavLink to="/delete">Eliminar</NavLink></li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>

         
      </Router>
   );
}

class App extends Component {
   render() {
      return (
         <div className="App">
            <Nav />
         </div>
      );
   }
}

export default App;
