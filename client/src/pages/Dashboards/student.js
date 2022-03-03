import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import SideNav from '../../components/Navbars/SideNav/SideNavStudents';
import TopNav from '../../components/Navbars/TopNav/TopNav';

// Pages
import AssignmentsPage from './student/AssignmentsPage'

// CSS
import './dashboard.css'

const Homepage = () => {
	// States
	const [currentId, setCurrentId] = useState(null);

	const dispatch = useDispatch();


	if(localStorage.getItem("role") != "student" ) {
		window.location.href = '/login'
		return;
	}
	

	let currentRoute = window.location.href;
	let page = currentRoute.substring(currentRoute.indexOf("/student") + 9).toUpperCase();
	if(page.length == 0) page = "DASHBOARD";

	let pageComponent
	if (page === "ASSIGNMENTS") {
		pageComponent = <AssignmentsPage />
	}
	
	return (
		<div>
			<TopNav />
			<SideNav />
			<div className='homepage-container'>
				<Container>
				 	<div className='header'>
					 	<h1>{page}</h1>
					</div>
					<div>
						{pageComponent}
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Homepage;
