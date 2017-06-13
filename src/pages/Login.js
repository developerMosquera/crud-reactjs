import React, { Component } from 'react';

import LoginForm from '../components/login/LoginForm';
import Nav from '../components/Nav/Nav';

import './css/Login.css';

class Login extends Component {

   render() {
      return (
         <div>
            <Nav brand="Noticias" />
            <LoginForm />
         </div>
      );
   }
}

export default Login;