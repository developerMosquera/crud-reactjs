import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Nav from '../components/Nav/Nav';

import { isLogin, getSessionStorage } from '../utils/ConexionApi';

class Home extends Component {
   constructor(props) {
      super(props);

      this.state = { redirect: true };
   }

   componentDidMount() {
      var _this = this;

      isLogin()
      .then(function(data) {
         _this.setState({
            redirect: data[0].status
         });
      });
   }

   renderRedirect() {
      if(this.state.redirect === false)
      {
         return (<div><Redirect to="/" /></div>);
      }
   }

   render() {

      return (
         <div>
            <Nav brand="Inicio" />

            <div className="jumbotron">
               <h1>Hello, { getSessionStorage("nombres") }!</h1>
               <p>Controlar tu dinero, ahora es mas facil con app VIYAA...</p>
               <p><a className="btn btn-primary btn-lg" role="button">Adelante</a></p>
            </div>

            {
               this.renderRedirect()
            }
         </div>
      );
   }
}

export default Home;