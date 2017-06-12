import React, { Component } from 'react';

import Nav from '../components/Nav/Nav';
import LoginForm from '../components/login/LoginForm';

import './css/Login.css';

class Login extends Component {

   handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.elements.user.value);
      console.log(e.target.elements.pass.value);

      console.log(this.state.authed);
   }

   render() {
      return (
         <div>
            <Nav brand="Noticias" />
            <LoginForm onSubmit={ this.h } />
         </div>
      );
   }
}

export default Login;