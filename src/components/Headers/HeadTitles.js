import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeadTitles extends Component {
   render() {
      return (
         <div className="well well-sm">
            <b>{ this.props.title }</b>
            {
               this.props.link === "true" ?
                  <div className="pull-right"><Link to={ this.props.linkTo }><span className={ this.props.icon }></span></Link></div>
               :
                  <div></div>
            }
         </div>
      );
   }
}

export default HeadTitles;