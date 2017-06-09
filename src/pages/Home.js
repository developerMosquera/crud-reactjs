import React, { Component } from 'react';

import loginForm from '../components/login/loginForm';

class Home extends Component {
   render() {
      return (
         <div>
            Hola desde home
            <loginForm />
         </div>
      );
   }
}

export default Home;