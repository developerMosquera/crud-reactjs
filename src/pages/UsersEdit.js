import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

import { isLogin, getSessionStorage } from '../utils/ConexionApi';
import { Base64 } from '../utils/Utility';
import { validateForm } from '../utils/ValidateForm';

import Nav from '../components/Nav/Nav';
import HeadTitles from '../components/Headers/HeadTitles';
import InputGroup from '../components/Forms/InputGroup';

class UsersEdit extends Component {

   constructor(props) {
      super(props);

      this.state = { redirect: true, dataListUser: [], editUser: false, alertDisplay: false, alertText: "default" };
   }

   componentDidMount() {
      var _this = this;

      isLogin()
      .then(function(data) {
         _this.setState({
            redirect: data[0].status
         });
      });

      $.ajax({
         url: 'http://localhost/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'users', METHOD: 'list', USER: Base64.decode(this.props.match.params.user), USER_ID: Base64.decode(this.props.match.params.userId) },
         success: function(data) {
            var result = JSON.parse(data);
            _this.setState({
               dataListUser: result
            })
         }
      });
   }

   handleSubmit(e) {
      e.preventDefault();
      var _this = this;
      var returnValidateForm = validateForm(e.target.id);

      if(returnValidateForm === true)
      {
         $.ajax({
            url: 'http://localhost/api-crud-reactjs/',
            cache: false,
            method: "post",
            data: { CONTROLLER : 'users', METHOD: 'update', PASS: e.target.elements.pass.value, NOMBRE: e.target.elements.nombre.value, APELLIDO: e.target.elements.apellido.value, CEDULA: e.target.elements.cedula.value, USER_ID: Base64.decode(this.props.match.params.userId), USER: Base64.decode(this.props.match.params.user), TOKEN: getSessionStorage('ToKen') },
            success: function(data) {
               var result = JSON.parse(data);

               if(result[0].SAVE === false)
               {
                  _this.setState({
                     editUser: result[0].SAVE,
                     alertDisplay: true,
                     alertText: result[0].MESSAGE
                  });
               } else {
                  _this.setState({
                     editUser: result[0].SAVE,
                     alertDisplay: false
                  });
               }
            }
         });
      }
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

            <HeadTitles title="Editar usuario" link="false" />

            <div className="panel panel-default">

               <form id="userAddFormValidate" onSubmit={ this.handleSubmit.bind(this) }>
                  <div className="panel-body">

                     {
                        this.state.dataListUser.map((users, index) => (
                           <div key={ users.ID_USER } className="row">
                              <div className="col-md-6">

                                 <div className="panel panel-default">
                                    <div className="panel-heading">Información usuario</div>
                                    <div className="panel-body">

                                       <InputGroup type="text" name="nombre" id="nombre" nameInput="Nombre" dataName="Nombre" placeholder="Nombre" value={ users.NOMBRES } dataRequired="true" />
                                       <InputGroup type="text" name="apellido" id="apellido" nameInput="Apellido" dataName="Apellido" placeholder="Apellido" value={ users.APELLIDOS } dataRequired="true" />
                                       <InputGroup type="number" name="cedula" id="cedula" nameInput="Cedula" dataName="Cedula" placeholder="Cedula" value={ users.CEDULA } dataRequired="true" />

                                    </div>
                                 </div>

                              </div>

                              <div className="col-md-6">

                                 <div className="panel panel-default">
                                    <div className="panel-heading">Información logueo</div>
                                    <div className="panel-body">

                                       <InputGroup type="text" name="usuario" id="usuario" nameInput="Usuario" dataName="Usuario" placeholder="Usuario" value={ users.USUARIO } dataRequired="true" disabled="true" />
                                       <InputGroup type="password" name="pass" id="pass" nameInput="Contraseña" dataName="Pass" passConfirm="false" placeholder="Contraseña (Minimo 8 caracteres)" dataRequired="true" />
                                       <InputGroup type="password" name="confirmpass" id="confirmpass" nameInput="Confirmar contraseña" dataName="ConfirmPass" dataPassConfirm="pass" passConfirm="true" placeholder="Confirme su contraseña" dataRequired="true" />

                                    </div>
                                 </div>

                              </div>

                           </div>
                        ))
                     }

                  </div>
                  <div className="panel-footer">
                     <button type="submit" className="btn btn-default">Crear</button>
                  </div>

               </form>

            </div>

            {
               this.state.alertDisplay === true ?
                  <div className="alert alert-danger" role="alert">{ this.state.alertText }</div>
               :
                  <div></div>
            }

            {
               this.state.editUser === true ?
                  <div><Redirect to="/users" /></div>
               :
                  <div></div>
            }

            {  /***
                  Importante Redirect que valida que este activo el usuario,
                  NO QUITAR
               ***/
               this.renderRedirect()
            }
         </div>
      );
   }
}

export default UsersEdit;