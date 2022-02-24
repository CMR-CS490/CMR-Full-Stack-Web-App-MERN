import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import SideNav from '../../components/Navbars/SideNav/SideNav';
import TopNav from '../../components/Navbars/TopNav/TopNav';

// Pages
import QuestionsPage from './teacher/QuestionsPage';

// CSS
import './dashboard.css'

const Homepage = () => {
	// States
	const [currentId, setCurrentId] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if(localStorage.getItem("role") !== "teacher" ) {
			window.location.href = '/login'
		}
	}, []);

	let currentRoute = window.location.href;
	let page = currentRoute.substring(currentRoute.indexOf("/teacher") + 9).toUpperCase();
	if(page.length == 0) page = "DASHBOARD";

	let pageComponent
	if (page === "QUESTIONS") {
		pageComponent = <QuestionsPage />
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
