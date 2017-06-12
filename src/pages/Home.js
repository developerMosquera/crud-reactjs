import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';

class Home extends Component {
   render() {
      return (
         <div>
            <Nav brand="Noticias" />
            <div className="jumbotron">
               <h1>Hello, world!</h1>
                  <p>React es muy Pro...</p>
                  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
               </div>
         </div>
      );
   }
}

export default Home;