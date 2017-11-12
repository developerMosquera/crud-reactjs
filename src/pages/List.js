import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import HeadTitles from '../components/Headers/HeadTitles';

import { isLogin, getSessionStorage } from '../utils/ConexionApi';

class List extends Component {
   constructor(props) {
      super(props);

      this.state = { redirect: true, ingresosListDespues: [], ingresosListAntes: [], egresosListDespues: [], egresosListAntes: [], totalIngresosListDespues: "", totalEgresosListDespues: "" };
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
         data: { CONTROLLER : 'crud', METHOD: 'list', TYPE_DATA: 1, USER_ID: getSessionStorage('userId') },
         success: function(data) {
            var result = JSON.parse(data);

            _this.setState({
               ingresosListDespues: result[0],
               ingresosListAntes: result[1],
               egresosListDespues: result[2],
               egresosListAntes: result[3],
               totalIngresosListDespues: result[4].VALOR_TOTAL,
               totalEgresosListDespues: result[5].VALOR_TOTAL
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

            <HeadTitles title="Listado de contabilidad" link="false" />

            <div className="row">

               <div className="col-md-6">
                  <div className="panel panel-success">
                     <div className="panel-heading"><span className="glyphicon glyphicon-arrow-up"></span> Ingresos proximos del mes</div>
                     <div className="panel-body">

                        <table className="table table-hover">
                           <thead>
                              {
                                 this.state.ingresosListAntes.map(function(listCrud, index) {
                                    return (
                                       <tr key={ index }>
                                          <th>{ index + 1 }</th>
                                          <th style={{ "fontWeight": "normal" }}>{ listCrud.DESCRIPCION }</th>
                                          <th style={{ "fontWeight": "normal" }}>{ listCrud.FECHA_EJECUCION }</th>
                                          <th style={{ "fontWeight": "normal" }}>$ { listCrud.VALOR }</th>
                                       </tr>
                                    )
                                 })
                              }
                              <tr>
                                 <th>#</th>
                                 <th>Descripción</th>
                                 <th>fecha egreso</th>
                                 <th>valor</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 this.state.ingresosListDespues.map(function(listCrud, index) {
                                    return (
                                       <tr key={ index }>
                                          <th>{ (index + 1) }</th>
                                          <td>{ listCrud.DESCRIPCION }</td>
                                          <td>{ listCrud.FECHA_EJECUCION }</td>
                                          <td>$ { listCrud.VALOR }</td>
                                       </tr>
                                    )
                                 })
                              }
                           </tbody>
                           <tfoot>
                              <tr>
                                 <td colSpan="3"><b>Total mes</b></td>
                                 <td><b>$ { this.state.totalIngresosListDespues }</b></td>
                              </tr>
                           </tfoot>
                        </table>

                     </div>
                  </div>
               </div>

               <div className="col-md-6">
                  <div className="panel panel-danger">
                     <div className="panel-heading"><span className="glyphicon glyphicon-arrow-down"></span> Egresos proximos del mes</div>
                     <div className="panel-body">

                        <table className="table table-hover">
                           <thead>
                              {
                                 this.state.egresosListAntes.map(function(listCrud, index) {
                                    return (
                                       <tr key={ index }>
                                          <th>{ index + 1 }</th>
                                          <th style={{ "fontWeight": "normal" }}>{ listCrud.DESCRIPCION }</th>
                                          <th style={{ "fontWeight": "normal" }}>{ listCrud.FECHA_EJECUCION }</th>
                                          <th style={{ "fontWeight": "normal" }}>$ { listCrud.VALOR }</th>
                                       </tr>
                                    )
                                 })
                              }
                              <tr>
                                 <th>#</th>
                                 <th>Descripción</th>
                                 <th>fecha egreso</th>
                                 <th>valor</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 this.state.egresosListDespues.map(function(listCrud, index) {
                                    return (
                                       <tr key={ index }>
                                          <th>{ (index + 1) }</th>
                                          <td>{ listCrud.DESCRIPCION }</td>
                                          <td>{ listCrud.FECHA_EJECUCION }</td>
                                          <td>$ { listCrud.VALOR }</td>
                                       </tr>
                                    )
                                 })
                              }
                           </tbody>
                           <tfoot>
                              <tr>
                                 <td colSpan="3"><b>Total mes</b></td>
                                 <td><b>$ { this.state.totalEgresosListDespues }</b></td>
                              </tr>
                           </tfoot>
                        </table>

                     </div>
                  </div>
               </div>

            </div>

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

export default List;