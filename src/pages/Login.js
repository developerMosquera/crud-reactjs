import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { setSessionStorage, isLogin } from '../utils/ConexionApi';

import LoginForm from '../components/login/LoginForm';
import Nav from '../components/Nav/Nav';

import './css/Login.css';

class Login extends Component {
   constructor(props) {
      super(props);

      this.state = { authed: false };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
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

   handleSubmit(e) {
      e.preventDefault();
      setSessionStorage('user', e.target.elements.user.value);
      setSessionStorage('ToKen', e.target.elements.pass.value);

      if(isLogin("12345"))
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
      if(this.state.authed === true)
      {
         return (
            <div>
               <Redirect to="/"/>
            </div>
         );
      } else {
         return (
            <LoginForm onSubmit={ this.handleSubmit } />
         );
      }
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
                        { this.renderRedirectLogin() }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;