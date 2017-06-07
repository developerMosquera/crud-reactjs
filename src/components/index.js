import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import $ from 'jquery';

import './css/index.css';

import Home from '../pages/Home';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         authed: "Andres"
      }
   }

   componentDidMount() {
      /*componentWillMount = () => {
      this.setState = ({ auth: 1 });

      //console.log(this.state.auth);
      }*/

      /*pruebaAjax = () => {
         $.ajax({
            url: 'http://192.168.100.54:7354/desarrollo/amosquera/home/pruebas/WEBLIFE/progress.php',
            cache: false,
            method: "post",
            data: { id : 1, user: "amosquera", pass: "Olvido2017%" },
            success: function(data) {
               console.log("ya enviado");
               //console.log(data);
               this.setState = ({
                  authed: 1
               });
            },
            error: function(xhr, status, err) {
               console.log(xhr.status);
            }
         })

         this.setState = ({
            authed: 1
         });
      }*/
   }

   

   pruebaAjaxDos = () => {
      this.setState = ({
         authed: "Julian"
      });
      console.log(this.state.authed);
   }

   render() {
      return (
         <BrowserRouter>
            <div className="row">
               <div className="container">
                  <nav className="navbar navbar-default nav-app">
                     <div className="container-fluid">
                        <div id="navbar" className="navbar-collapse collapse">
                           <ul className="nav navbar-nav">
                              <li><Link className="active" to="/home">Home { this.state.authed } </Link></li>
                              <li onClick={ this.pruebaAjaxDos }><Link to="/add">Agregar</Link></li>
                              <li><Link to="/edit">Editar</Link></li>
                              <li><Link to="/delete">Eliminar</Link></li>
                           </ul>
                           <ul className="nav navbar-nav navbar-right">
                              <li><Link to="/users"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></Link></li>
                           </ul>
                        </div>
                     </div>
                  </nav>

                  <Switch>
                     <Route path='/home' component={ Home } />

                  </Switch>
               </div>
            </div>
         </BrowserRouter>
      )
   }
}

export default App;