import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

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

      console.log(usersExample);

      this.state = { showModal: true };
   }


   close() {
      this.setState({ showModal: false });
   }

   open(dataPrueba) {
      this.setState({ showModal: true });
   }

   modal(data) {

      console.log(this.state.showModal);

      return (
         <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
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

   /*popover() {
      return (
         <Popover id="modal-popover" title="popover">
           very popover. such engagement
         </Popover>
      );
   }

   tooltip() {
      return (
         <Tooltip id="modal-tooltip">
           wow.
         </Tooltip>
      );
   }*/


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

            <Button bsStyle="primary" bsSize="large" onClick={ () => this.modal(true) } >
               Launch demo modal
            </Button>

            

            { this.renderRedirectLogin() }
         </div>
      );
   }
}

export default Users;