import React, { Component } from 'react';

import { getSessionStorage } from '../../utils/ConexionApi';

import NavActive from './NavActive';
import NavInactive from './NavInactive';

class Nav extends Component {
   constructor(props) {
      super(props);

      this.state = { authed: false };
   }

   componentDidMount() {
      if(getSessionStorage("ToKen") === '12345')
      {
         this.setState({
            authed: true
         });
      } else {
         this.setState({
            authed: false
         });
      }
   }

   render() {
      return (
         <div>
         { this.state.authed === false ?
               <NavInactive brand={ this.props.brand } />
            :
               <NavActive brand={ this.props.brand } />
         }
         </div>
      );
   }
}

export default Nav;