import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { logOut } from '../utils/ConexionApi';

class Logout extends Component {
   constructor(props) {
      super(props);

      this.state = { authed: false };
   }

   componentDidMount() {
      logOut();
   }

   render() {
      return (
         <div>
            <Redirect to="/"/>
         </div>
      );
   }
}

export default Logout;