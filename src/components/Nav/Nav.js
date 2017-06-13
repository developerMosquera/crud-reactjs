import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getSessionStorage, isLogin } from '../../utils/ConexionApi';

import NavActive from './NavActive';
import NavInactive from './NavInactive';

class Nav extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            {
               ( isLogin('12345') ) ?
                  <NavActive brand="Inicio" />
               :
                  <NavInactive brand="Inicio" />
            }
         </div>
      );
   }
}

export default Nav;