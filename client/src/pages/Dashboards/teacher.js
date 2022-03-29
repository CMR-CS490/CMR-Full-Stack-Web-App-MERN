import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import SideNav from '../../components/Navbars/SideNav/SideNavTeachers';
import TopNav from '../../components/Navbars/TopNav/TopNav';

// Pages
import QuestionsPage from './teacher/QuestionsPage';
import TestsPage from './teacher/TestsPage'
import TestDetailsPage from './teacher/TestDetailsPage'
import TestResultsPage from './teacher/TestResultsPage';
// CSS
import './dashboard.css'

const Homepage = () => {
	// States
	const [currentId, setCurrentId] = useState(null);

	const dispatch = useDispatch();

	let role = localStorage.getItem('role')
	if(role === 'teacher') {

	}
	else if (role === 'student') {
		window.location.href = '/student';
		return;
	} else {
		window.location.href = '/login';
		return;
	}

	

	let currentRoute = window.location.href;
	let page = currentRoute.substring(currentRoute.indexOf("/teacher") + 9).toUpperCase();
	console.log(page)
	if(page.length == 0) page = "DASHBOARD";

	let testID = "";
	if(page.includes("TEST") && page.indexOf("/") > 0) {
		testID = page.substring(page.indexOf("/") + 1);
	}
	let answerID = ""
	if(page.includes("TESTS/RESULTS") && page.indexOf("/") > 0) {
		answerID = page.substring(page.indexOf("/") + 9);
		// console.log("from teacher.js: answerID: ", answerID);
	}
	let pageComponent
	if (page === "QUESTIONS") {
		pageComponent = <QuestionsPage />
	} else if (page === "DASHBOARD") {
		pageComponent = <TestsPage />
	} else if (page === "CREATETESTS") {
		page = "CREATE TEST";
	} else if (page.includes("TESTS/RESULTS")) {
		page = "TEST RESULTS"
		pageComponent = <TestResultsPage answerID = {answerID} />
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
