import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

import { isLogin} from '../utils/ConexionApi';

import Nav from '../components/Nav/Nav';

import './css/Users.css';

let usersExample = [
   {
      id: 1,
      nombre: 'Ingrid Gonzalez',
      usuario: 'igonzalez',
      identificacion: 1022972148,
      estado: 'Activo'
   },
   {
      id: 2,
      nombre: 'Andres Mosquera',
      usuario: 'amosquera',
      identificacion: 1022965455,
      estado: 'Activo'
   }
];

class Users extends Component {
   constructor(props) {
      super(props);
   }

   renderRedirectLogin() {
      if(!isLogin("12345"))
      {
         return (
            <div>
               <Redirect to="/"/>
            </div>
         );
      }
   }

   render() {

      return (
         <div>
            <Nav brand="Inicio" />

            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Nombre</th>
                     <th>Usuario</th>
                     <th>Identificacion</th>
                     <th>Estado</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     usersExample.map((users, index) => (
                        <tr key={ users.id }>
                           <th scope="row">{ users.id }</th>
                           <td>{ users.nombre }</td>
                           <td>{ users.usuario }</td>
                           <td>{ users.identificacion }</td>
                           <td>{ users.estado }</td>
                           <td className="cursor-default" onClick={ () => this.editUsers(users.id) }><span className="glyphicon glyphicon-edit" aria-hidden="true" data-toggle="modal" data-target="#myModal"></span></td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>

            <button type="button" className="prueba">
               Launch demo modal
            </button>


            {  /*** Importante Redirect, NO QUITAR ***/
               this.renderRedirectLogin()
            }
         </div>
      );
   }
}

export default Users;