import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/nav.css';

class NavInactive extends Component {
	render() {
		return (
			<nav className="navbar navbar-default nav-app">
				<div className="container-fluid">
					<div className="navbar-header">
						<span className="navbar-brand"><Link to="/">{ this.props.brand }</Link></span>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/login">Login <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span></Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavInactive;