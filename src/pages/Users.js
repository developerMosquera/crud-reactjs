import React, { Component } from 'react';

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

      console.log(usersExample);
   }

   editUsers(userId) {
      return (
         <div className="modal fade" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                     <p>One fine body&hellip;</p>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
               </div>
            </div>
         </div>
      )
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
         </div>
      );
   }
}

export default Users;