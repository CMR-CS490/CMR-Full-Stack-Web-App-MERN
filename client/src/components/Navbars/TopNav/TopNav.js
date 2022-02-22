import { React } from 'react';
import './TopNav.css';
import {useEffect, useState} from 'react';


const NavBar = (props) => {

	function logout () {
		localStorage.removeItem("token");
		localStorage.removeItem("role");
		window.location.href = '/login';
	}

	return (
		<div className="nav-container">
			<div className="left-contents">
				<span className="logo-header"><span className="logo-letter">A</span>uto<span className="logo-letter">G</span>rader</span>
			</div>
			<div className="center-contents">
				<h1 className="username"> Hi {localStorage.getItem("username")}!</h1>
			</div>
			<div className="right-contents">
				<span className='logout-btn' onClick = {logout}><a className="logout-link">Logout</a></span>
			</div>
		</div>
	)
};


export default NavBar;


