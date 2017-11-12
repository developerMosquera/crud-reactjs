import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/nav.css';

class Nav extends Component {

   render() {
      return (
         <nav className="navbar navbar-default nav-app">
            <div className="container-fluid">
               <div className="navbar-header">
                  <span className="navbar-brand"><Link to="/home">{ this.props.brand }</Link></span>
               </div>
               <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                     <li><Link className="active" to="/list">Listar</Link></li>
                     <li><Link to="/add">Agregar</Link></li>
                     <li><Link to="/edit">Editar</Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                     <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                           <li><Link to="/users">Usuarios</Link></li>
                           <li><Link to="/users">Configuración</Link></li>
                           <li role="separator" className="divider"></li>
                           <li><Link to="/logout">Salir</Link></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}

export default Nav;