import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

import { isLogin, getSessionStorage } from '../utils/ConexionApi';
import { validateForm } from '../utils/ValidateForm';

import Nav from '../components/Nav/Nav';
import HeadTitles from '../components/Headers/HeadTitles';
import InputGroup from '../components/Forms/InputGroup';
import SelectGroup from '../components/Forms/SelectGroup';

class Add extends Component {
   constructor(props) {
      super(props);

      this.state = { redirect: true, listConceptos: [], saveRegistro: false, alertDisplay: false, alertText: "default" };
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
            data: { CONTROLLER : 'crud', METHOD: 'add', ID_USER: getSessionStorage('userId'), CONCEPTO: e.target.elements.concepto.value, VALOR: e.target.elements.valor.value, FECHA_EJECUCION: e.target.elements.fechaEjecucion.value, DESCRIPCION: e.target.elements.descripcion.value },
            success: function(data) {
               var result = JSON.parse(data);

               if(result[0].SAVE === false)
               {
                  _this.setState({
                     saveRegistro: result[0].SAVE,
                     alertDisplay: true,
                     alertText: result[0].MESSAGE
                  });
               } else {
                  _this.setState({
                     saveRegistro: result[0].SAVE,
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

            <HeadTitles title="Agregar a contabilidad" link="false" />

            <div className="panel panel-default">

               <form id="addFormValidate" onSubmit={ this.handleSubmit.bind(this) }>
                  <div className="panel-body">

                     <div className="row">
                        <div className="col-md-6">

                           <div className="panel panel-default">
                              <div className="panel-heading">Información registro</div>
                              <div className="panel-body">

                                 <SelectGroup id="concepto" name="concepto" nameInput="Concepto" dataName="Concepto" dataRequired="true" jsonData={ this.state.listConceptos } />
                                 <InputGroup type="number" name="valor" id="valor" nameInput="Valor" dataName="Valor" placeholder="Valor" dataRequired="true" />

                              </div>
                           </div>

                        </div>

                        <div className="col-md-6">

                           <div className="panel panel-default">
                              <div className="panel-heading">Información logueo</div>
                              <div className="panel-body">

                                 <InputGroup type="date" name="fechaEjecucion" id="fechaEjecucion" nameInput="Fecha ejecución" dataName="FechaEjecucion" placeholder="Fecha ejecución" dataRequired="true" />
                                 <InputGroup type="text" name="descripcion" id="descripcion" nameInput="Descripción" dataName="Descripcion" placeholder="Descripcion" dataRequired="true" />

                              </div>
                           </div>

                        </div>

                     </div>

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
               this.state.saveRegistro === true ?
                  <div><Redirect to="/list" /></div>
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

export default Add