import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import Home from '../pages/Home';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div>
               <nav className="navbar navbar-default">
                  <div className="container-fluid">
                     <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                           <li><Link className="active" to="/home">Home</Link></li>
                           <li><Link to="/add">Agregar</Link></li>
                           <li><Link to="/edit">Editar</Link></li>
                           <li><Link to="/delete">Eliminar</Link></li>
                        </ul>
                     </div>
                  </div>
               </nav>

               <div className="container">
                  <div className="row">
                     <Switch>
                        <Route path='/home' component={ Home } />
                     </Switch>
                  </div>
               </div>
            </div>
         </BrowserRouter>
      )
   }
}

export default App;