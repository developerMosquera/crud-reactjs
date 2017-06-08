import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import $ from 'jquery';

import './css/index.css';

//import Login from './Login';
import Home from './Home';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { authed: 0 };

      //this.frenchify = this.frenchify.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
      this.ajaxInicial();
   }

   ajaxInicial() {
      var self = this;
      $.ajax({
         url: 'http://192.168.100.54:7354/desarrollo/amosquera/home/pruebas/WEBLIFE/progress.php',
         cache: false,
         method: "post",
         data: { id : 1, user: "amosquera", pass: "Olvido2017%" },
         success: function(data) {
            console.log("ya enviado");
            console.log(data);
            /*self.setState({
               authed: data
            })*/
            //this.setState({ greeting: 'Bonjour' });
         },
         error: function(xhr, status, err) {
            console.log(xhr.status);
         }
      })
   }

   handleSubmit(e) {
      e.preventDefault();
      /*console.log(e.target.elements.user.value);
      console.log(e.target.elements.pass.value);

      console.log(this.state.authed);*/
   }

   logout(e) {
      e.preventDefault();
      console.log("Desde logout");
   }

   render() {

      const Login = (

         <div className="row">
            <div className="container">
               <nav className="navbar navbar-default nav-app">
                  <div className="container-fluid">
                  </div>
               </nav>

               <div className="row">
                  <div className="col-md-6 col-md-offset-3">

                     <div className="panel panel-default">
                        <div className="panel-heading">
                           <h1 className="panel-title">Inicio de sesión</h1>
                        </div>
                        <div className="panel-body">
                           <form>
                              <div className="form-group">
                                 <label>Usuario</label>
                                 <input type="text" className="form-control" name="user" placeholder="Usuario" />
                              </div>
                              <div className="form-group">
                                 <label>Contraseña</label>
                                 <input type="password" className="form-control" name="pass" placeholder="Contraseña" />
                              </div>
                              <button type="button" onClick={this.logout.bind(this)} className="btn btn-success">Submit</button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      );

      const Nav = (

         <BrowserRouter>
            <div className="row">
               <div className="container">
                  <nav className="navbar navbar-default nav-app">
                     <div className="container-fluid">
                        <div id="navbar" className="navbar-collapse collapse">
                           <ul className="nav navbar-nav">
                              <li><Link className="active" to="/home">Home</Link></li>
                              <li><Link to="/add">Agregar</Link></li>
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
      );

      return this.state.authed === 0 ? Login : Nav
   }
}

export default App;