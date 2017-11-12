import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect, Link } from 'react-router-dom';

import { isLogin, getSessionStorage } from '../utils/ConexionApi';
import { Base64 } from '../utils/Utility';

import Nav from '../components/Nav/Nav';
import HeadTitles from '../components/Headers/HeadTitles';

class Edit extends Component {
   constructor(props) {
      super(props);

      this.state = { redirect: true, dataListRegistros: [] };
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
         data: { CONTROLLER : 'crud', METHOD: 'list', TYPE_DATA: 2, USER_ID: getSessionStorage('userId') },
         success: function(data) {
            var result = JSON.parse(data);

            _this.setState({
               dataListRegistros: result
            })
         }
      });
   }

   handleStateRegistro(e) {
      e.preventDefault();
      var _this = this;

      $.ajax({
         url: 'http://192.168.1.56/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'crud', METHOD: 'editState', ESTADO: $("#" + e.target.id).attr("data-state"), ID: e.target.id }
      });

      $.ajax({
         url: 'http://192.168.1.56/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'crud', METHOD: 'list', TYPE_DATA: 2, USER_ID: getSessionStorage('userId') },
         success: function(data) {
            var result = JSON.parse(data);

            _this.setState({
               dataListRegistros: result
            })
         }
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

            <HeadTitles title="Editar registro" link="false" />

            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Concepto</th>
                     <th>Descripción</th>
                     <th>Fecha ejecución</th>
                     <th>Valor</th>
                     <th>Estado</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     this.state.dataListRegistros.map((registro, index) => (
                        <tr key={ registro.ID }>
                           <th scope="row">{ index + 1 }</th>
                           <td>{ registro.CONCEPTO }</td>
                           <td>{ registro.DESCRIPCION }</td>
                           <td>{ registro.DIA_EJECUCION }</td>
                           <td>{ registro.VALOR }</td>
                           <td>{ registro.ESTADO === '1' ? 'Activo' : 'Inactivo' }</td>
                           <td className="cursor-default"><Link to={ `/edit-registry/${ Base64.encode(registro.CONCEPTO) }/${ Base64.encode(registro.ID) }` }><span className="glyphicon glyphicon-edit"></span></Link></td>
                           <td><a href="" onClick={ this.handleStateRegistro.bind(this) }>{ registro.ESTADO === '1' ? <span id={ registro.ID } data-state="0" className="glyphicon glyphicon-thumbs-down"></span> : <span id={ registro.ID } data-state="1" className="glyphicon glyphicon-thumbs-up"></span> }</a></td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>

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

export default Edit;