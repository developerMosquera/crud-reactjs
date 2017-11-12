import React, { Component } from 'react';
import $ from 'jquery';
import { Redirect, Link } from 'react-router-dom';

import { isLogin } from '../utils/ConexionApi';
import { Base64 } from '../utils/Utility';

import Nav from '../components/Nav/Nav';
import HeadTitles from '../components/Headers/HeadTitles';


class Users extends Component {
   constructor(props) {
      super(props);

      this.state = { dataListUser: [], redirect: true };
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
         data: { CONTROLLER : 'users', METHOD: 'list' },
         success: function(data) {
            var result = JSON.parse(data);
            _this.setState({
               dataListUser: result
            })
         }
      });
   }

   handleStateUser(e) {
      e.preventDefault();
      var _this = this;

      $.ajax({
         url: 'http://localhost/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'users', METHOD: 'editState', ESTADO: $("#" + e.target.id).attr("data-state"), ID_USER: e.target.id }
      });

      $.ajax({
         url: 'http://localhost/api-crud-reactjs/',
         cache: false,
         method: "post",
         data: { CONTROLLER : 'users', METHOD: 'list' },
         success: function(data) {
            var result = JSON.parse(data);
            _this.setState({
               dataListUser: result
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

            <HeadTitles title="Usuarios" link="true" linkTo="/users-add" icon="glyphicon glyphicon-plus" />

            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Nombre</th>
                     <th>Usuario</th>
                     <th>Identificacion</th>
                     <th>Estado</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     this.state.dataListUser.map((users, index) => (
                        <tr key={ users.ID_USER }>
                           <th scope="row">{ users.ID_USER }</th>
                           <td>{ users.NOMBRES } { users.APELLIDOS }</td>
                           <td>{ users.USUARIO }</td>
                           <td>{ users.CEDULA }</td>
                           <td>{ users.ESTADO === '1' ? 'Activo' : 'Inactivo' }</td>
                           <td className="cursor-default"><Link to={ `/users-edit/${ Base64.encode(users.USUARIO) }/${ Base64.encode(users.ID_USER) }` }><span className="glyphicon glyphicon-edit"></span></Link></td>
                           <td><a href="" onClick={ this.handleStateUser.bind(this) }>{ users.ESTADO === '1' ? <span id={ users.ID_USER } data-state="0" className="glyphicon glyphicon-thumbs-down"></span> : <span id={ users.ID_USER } data-state="1" className="glyphicon glyphicon-thumbs-up"></span> }</a></td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>

            {  /*** Importante Redirect, NO QUITAR ***/
               this.renderRedirect()
            }
         </div>
      );
   }
}

export default Users;