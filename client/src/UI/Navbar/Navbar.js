import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
	return (
	<ul className="navbar">
		<li><Link to=''>Home</Link></li>
		<li><Link to='/movies'>Movies</Link></li>
		<li><Link to='/actors'>Actors</Link></li>
		<li><Link to='/directors'>Directors</Link></li>
		<li><Link to='/studios'>Studios</Link></li>
	</ul>
	)
}

export default Navbar;