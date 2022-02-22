import { React } from 'react';
import './TopNav.css';



const NavBar = (props) => {

	return (
		<div className="nav-container">
			<div className="left-contents">
				<span className="logo-header"><span className="logo-letter">A</span>uto<span className="logo-letter">G</span>rader</span>
			</div>
			<div className="right-contents">
				<span className='logout-btn'><a className="logout-link" href="/logout">Logout</a></span>
			</div>
		</div>
	)
};


export default NavBar;


