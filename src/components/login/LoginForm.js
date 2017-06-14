import React, { Component } from 'react';

class loginForm extends Component {

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