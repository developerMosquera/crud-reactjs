import React, { Component } from 'react';

class loginForm extends Component {
   constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind();
   }

   handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.elements.user.value);
   }

   render() {
      return (
         <div className="row">
            <div className="col-md-6 col-md-offset-3">

               <div className="panel panel-default">
                  <div className="panel-heading">
                     <h1 className="panel-title">Inicio de sesión</h1>
                  </div>
                  <div className="panel-body">
                     <form onSubmit={ this.handleSubmit }>
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
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default loginForm;