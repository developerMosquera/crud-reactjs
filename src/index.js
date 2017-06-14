import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/*** Paginas ***/
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Logout from './pages/Logout';

/*** Componentes ***/

const Root = () => {
   return (
      <BrowserRouter>
         <div className="row">
            <div className="container">

               <Switch>
                  <Route exact path='/' component={ Home } />
                  <Route path='/login' component={ Login } />
                  <Route path='/users' component={ Users } />
                  <Route path='/logout' component={ Logout } />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
}

ReactDOM.render(<Root />, document.getElementById('root'));