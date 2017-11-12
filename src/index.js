import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/*** Paginas ***/
import App from './pages/';
import Home from './pages/Home';
import Users from './pages/Users';
import UsersAdd from './pages/UsersAdd';
import UsersEdit from './pages/UsersEdit';
import Logout from './pages/Logout';

import List from './pages/List';
import Add from './pages/Add';
import Edit from './pages/Edit';
import EditRegistry from './pages/EditRegistry';

import NoMatch from './pages/NoMatch';

const Root = () => {
   return (
      <BrowserRouter>
         <div className="row">
            <div className="container">

               <Switch>
                  <Route exact path='/' component={ App } />
                  <Route path='/home' component={ Home } />
                  <Route path='/users' component={ Users } />
                  <Route path='/users-add' component={ UsersAdd } />
                  <Route path='/users-edit/:user/:userId' component={ UsersEdit } />

                  <Route path='/list' component={ List } />
                  <Route path='/add' component={ Add } />
                  <Route path='/edit' component={ Edit } />
                  <Route path='/edit-registry/:concepto/:id' component={ EditRegistry } />

                  <Route path='/logout' component={ Logout } />

                  <Route component={NoMatch}/>
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
}

ReactDOM.render(<Root />, document.getElementById('root'));