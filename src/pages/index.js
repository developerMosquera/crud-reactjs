import React, { Component } from 'react'
import $ from 'jquery';

import { setSessionStorage, isLogin } from '../utils/ConexionApi';

import Login from '../components/login/Login';
import Nav from '../components/Nav/Nav';

import './css/index.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { authed: false, alertDisplay: false, alertText: "Nada" };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
      var _this = this;

      isLogin()
      .then(function(data) {
         _this.setState({
            authed: data[0].status
         });
      });
   }

   handleSubmit(e) {
      var _this = this;
      e.preventDefault();

      if((e.target.elements.user.value === "") && (e.target.elements.pass.value === ""))
      {
         this.setState({
            alertDisplay: true,
            alertText: "¡Algo salio mal! Falta usuario y contraseña"
         });
      }
      else if(e.target.elements.user.value === "")
      {
         this.setState({
            alertDisplay: true,
            alertText: "¡Algo salio mal! Falta usuario"
         });
      }
      else if(e.target.elements.pass.value === "")
      {
         this.setState({
            alertDisplay: true,
            alertText: "¡Algo salio mal! Falta contraseña"
         });
      }
      else
      {

         $.ajax({
            url: 'http://localhost/api-crud-reactjs/',
            cache: false,
            method: "post",
            data: { CONTROLLER : 'login', METHOD: 'authentication', USER: e.target.elements.user.value, PASS: e.target.elements.pass.value },
            success: function(data) {
               var result = JSON.parse(data);

               if(result[0].LOGIN === false)
               {
                  _this.setState({
                     authed: false,
                     alertDisplay: true,
                     alertText: result[0].MESSAGE
                  });
               } else {
                  _this.setState({
                     authed: true,
                     alertDisplay: false,
                  });

                  setSessionStorage('userId', result[0].ID_USER);
                  setSessionStorage('user', result[0].USUARIO);
                  setSessionStorage('ToKen', result[0].TOKEN);
                  setSessionStorage('nombres', result[0].NOMBRES);
                  setSessionStorage('apellidos', result[0].APELLIDOS);
               }
            }
         });
      }
   }

   render() {
      return (
         <div>
            {
               this.state.authed === false ?
                  <Login onSubmit={ this.handleSubmit } alertDisplay={ this.state.alertDisplay } alertText={ this.state.alertText } />
               :
                  <div>
                     <Nav brand="Inicio" />
                     <div className="jumbotron">
                        <h1>Hello Friend!</h1>
                        <p>Controlar tu dinero, ahora es mas facil con app VIYAA...</p>
                        <p><a className="btn btn-primary btn-lg" role="button">Adelante</a></p>
                     </div>
                  </div>
            }
         </div>
      );
   }
}

export default App;