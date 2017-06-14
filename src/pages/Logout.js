import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { logOut, isLogin } from '../utils/ConexionApi';

class Logout extends Component {
   constructor(props) {
      super(props);

      this.state = { authed: false };
   }

   componentDidMount() {
      logOut();

      if(isLogin())
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

   renderRedirectLogOut() {
      if(this.state.authed === false)
      {
         return (
            <div>
               <Redirect to="/"/>
            </div>
         );
      }
   }

   render() {
      return (
         <div>
            { this.renderRedirectLogOut() }
         </div>
      );
   }
}

export default Logout;