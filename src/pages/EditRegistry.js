import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

import { isLogin, getSessionStorage } from '../utils/ConexionApi';
import { Base64 } from '../utils/Utility';
import { validateForm } from '../utils/ValidateForm';

import Nav from '../components/Nav/Nav';
import HeadTitles from '../components/Headers/HeadTitles';
import InputGroup from '../components/Forms/InputGroup';
import SelectGroup from '../components/Forms/SelectGroup';

class EditRegistry extends Component {

   constructor(props) {
      super(props);

      this.state = { redirect: true, dataListRegistro: [], editUser: false, alertDisplay: false, alertText: "default" };
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
         url: 'http://192.168.1.56/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'crud', METHOD: 'listConceptos'},
         success: function(data) {
            var result = JSON.parse(data);

            _this.setState({
               listConceptos: result
            })
         }
      });

      $.ajax({
         url: 'http://192.168.1.56/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'crud', METHOD: 'list', USER_ID: getSessionStorage('userId'), ID: Base64.decode(this.props.match.params.id) },
         success: function(data) {
            var result = JSON.parse(data);
            _this.setState({
               dataListRegistro: result
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
            url: 'http://192.168.1.56/api-crud-reactjs/',
            cache: false,
            method: "post",
            data: { CONTROLLER : 'crud', METHOD: 'update', USER_ID: getSessionStorage('userId'), ID: Base64.decode(this.props.match.params.id), CONCEPTO: e.target.elements.concepto.value, VALOR: e.target.elements.valor.value, FECHA_EJECUCION: e.target.elements.fechaEjecucion.value, DESCRIPCION: e.target.elements.descripcion.value },
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

               <form id="editFormValidate" onSubmit={ this.handleSubmit.bind(this) }>
                  <div className="panel-body">

                     {
                        this.state.dataListRegistro.map((registro, index) => (
                           <div key={ registro.ID } className="row">
                              <div className="col-md-6">

                                 <div className="panel panel-default">
                                    <div className="panel-heading">Información usuario</div>
                                    <div className="panel-body">

                                       <SelectGroup id="concepto" name="concepto" nameInput="Concepto" dataName="Concepto" dataRequired="true" jsonData={ this.state.listConceptos } />
                                       <InputGroup type="number" name="valor" id="valor" nameInput="Valor" dataName="Valor" placeholder="Valor" value={ registro.VALOR } dataRequired="true" />

                                    </div>
                                 </div>

                              </div>

                              <div className="col-md-6">

                                 <div className="panel panel-default">
                                    <div className="panel-heading">Información logueo</div>
                                    <div className="panel-body">

                                       <InputGroup type="date" name="fechaEjecucion" id="fechaEjecucion" nameInput="Fecha ejecución" dataName="FechaEjecucion" placeholder="Fecha ejecución" dataRequired="true" />
                                       <InputGroup type="text" name="descripcion" id="descripcion" nameInput="Descripción" dataName="Descripcion" placeholder="Descripcion" value={ registro.DESCRIPCION } dataRequired="true" />

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
                  <div><Redirect to="/edit" /></div>
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

export default EditRegistry;