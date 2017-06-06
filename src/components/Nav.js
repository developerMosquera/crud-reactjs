import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Nav extends Component{
   render(){
      return(
         <Router>
            <div className="container">
               <nav className="navbar navbar-default">
                  <div className="container-fluid">
                     <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                           <li><NavLink className="active" to="/">Home</NavLink></li>
                           <li><NavLink to="/add">Agregar</NavLink></li>
                           <li><NavLink to="/edit">Editar</NavLink></li>
                           <li><NavLink to="/delete">Eliminar</NavLink></li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </Router>
      )
   }
}

export default Nav;