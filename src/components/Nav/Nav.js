import React, { Component } from 'react';

import { isLogin} from '../../utils/ConexionApi';

import NavActive from './NavActive';
import NavInactive from './NavInactive';

class Nav extends Component {

   render() {
      return (
         <div>
            {
               ( isLogin("12345") ) ?
                  <NavActive brand="Inicio" />
               :
                  <NavInactive brand="Inicio" />
            }
         </div>
      );
   }
}

export default Nav;