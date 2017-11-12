import React, { Component } from 'react';
import InputGroup from '../Forms/InputGroup';

class Login extends Component {

   render() {
      return (
         <div className="row">
            <div className="col-md-6 col-md-offset-3">

               <div className="panel panel-default panel-login">
                  <div className="panel-heading">
                     <h1 className="panel-title">Inicio de sesión</h1>
                  </div>
                  <form onSubmit={ this.props.onSubmit }>
                     <div className="panel-body">

                        <InputGroup type="text" name="user" id="user" nameInput="Usuario" dataName="Usuario" dataRequired="false" />
                        <InputGroup type="password" name="pass" id="pass" nameInput="Contraseña" dataName="Pass" dataRequired="false" />

                     </div>
                     <div className="panel-footer">
                        <button type="submit" className="btn btn-success">Ingresar</button>
                     </div>
                  </form>
               </div>

               { this.props.alertDisplay === true ?
                     <div className="alert alert-danger" role="alert">{ this.props.alertText }</div>
                  :
                     <div></div>
               }
            </div>
         </div>

      );
   }
}

export default Login;