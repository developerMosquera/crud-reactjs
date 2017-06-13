import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//import { setSessionStorage, getSessionStorage, validateSessionToKen } from './utils/ConexionApi';

/*** Paginas ***/
import Home from './pages/Home';
import Login from './pages/Login';

/*** Componentes ***/

//console.log(validateSessionToKen('12345'));

const Root = () => {
   return (
      <BrowserRouter>
         <div className="row">
            <div className="container">

               <Switch>
                  <Route exact path='/' component={ Home } />
                  <Route path='/login' component={ Login } />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
}

ReactDOM.render(<Root />, document.getElementById('root'));