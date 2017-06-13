import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { isLogin } from '../utils/ConexionApi';

import LoginForm from '../components/login/LoginForm';
import Nav from '../components/Nav/Nav';

import './css/Login.css';

class Login extends Component {
   constructor(props) {
      super(props);

      this.state = { authed: false };

      //this.handleSubmit = this.handleSubmit.bind(this);
   }

   /*componentDidMount() {
      if(isLogin('12345'))
      {
         this.setState({
            authed: true
         });
      } else {
         this.setState({
            authed: false
         });
      }
   }

   renderRedirectLogin() {
      if(!this.state.authed)
      {
         return (
            <div>
               <Redirect to="/"/>
            </div>
         );
      } else {
         return (
            <LoginForm />
         );
      }
   }*/

   handleSubmit(e) {
      e.preventDefault();
      console.log("Form login");
   }

   render() {
      return (
         <div>
            <Nav brand="Noticias" />

            <div className="row">
               <div className="col-md-6 col-md-offset-3">

                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h1 className="panel-title">Inicio de sesión</h1>
                     </div>
                     <div className="panel-body">
                        <LoginForm onSubmit={ this.handleSubmit } />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;