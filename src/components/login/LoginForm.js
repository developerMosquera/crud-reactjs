import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { setSessionStorage, getSessionStorage, isLogin } from '../../utils/ConexionApi';

class loginForm extends Component {
   constructor(props) {
      super(props);

      //this.state = { authed: false };

      //this.handleSubmit = this.handleSubmit.bind(this);
   }

   /*handleSubmit(e) {
      e.preventDefault();
      setSessionStorage('user', e.target.elements.user.value);
      setSessionStorage('ToKen', e.target.elements.pass.value);

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
      if(this.state.authed)
      {
         return (
            <div>
               <Redirect to="/"/>
            </div>
         );
      }
   }*/

   render() {
      return (
            <form onSubmit={ this.props.onSubmit }>
               <div className="form-group">
                  <label>Usuario</label>
                  <input type="text" className="form-control" name="user" placeholder="Usuario" />
               </div>
               <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" className="form-control" name="pass" placeholder="Contraseña" />
               </div>
               <button type="submit" className="btn btn-success">Submit</button>
            </form>

            //{ this.renderRedirectLogin() }

      );
   }
}

export default loginForm;