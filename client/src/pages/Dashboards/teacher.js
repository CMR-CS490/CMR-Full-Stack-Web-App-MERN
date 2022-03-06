import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import SideNav from '../../components/Navbars/SideNav/SideNavTeachers';
import TopNav from '../../components/Navbars/TopNav/TopNav';

// Pages
import QuestionsPage from './teacher/QuestionsPage';
import TestsPage from './teacher/TestsPage'
import TestDetailsPage from './teacher/TestDetailsPage'
// CSS
import './dashboard.css'

const Homepage = () => {
	// States
	const [currentId, setCurrentId] = useState(null);

	const dispatch = useDispatch();

	
	if(localStorage.getItem("role") !== "teacher" ) {
		window.location.href = '/login';
		return;
	} 
	if(localStorage.getItem("role") === "student") {
		window.location.href = '/student';
		return;
	}

	

	let currentRoute = window.location.href;
	let page = currentRoute.substring(currentRoute.indexOf("/teacher") + 9).toUpperCase();
	if(page.length == 0) page = "DASHBOARD";

	let testID = "";
	if(page.includes("TEST") && page.indexOf("/") > 0) {
		testID = page.substring(page.indexOf("/") + 1);
	}
	let pageComponent
	if (page === "QUESTIONS") {
		pageComponent = <QuestionsPage />
	} else if (page === "TESTS") {
		pageComponent = <TestsPage />
	} else if (testID.length > 0) {
		page = "TEST DETAILS";
		pageComponent = <TestDetailsPage testID = {testID}/>
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
