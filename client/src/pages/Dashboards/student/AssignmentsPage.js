import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';

// Actions
import {getStudentTests} from '../../../actions/tests';


// Components
import Tests from '../../../components/Tests/Tests';

// CSS
import './AssignmentsPage.css';

// This page is for students. They can see tests that they need to take.
const AssignmentsPage = () => {

    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStudentTests());
	}, [dispatch]);

	const onButtonClick = (testID) => {
		console.log(testID);
	}
	return (
		<div className='assignments-container'>
			<Container>
				<Grow in>
					<Container>
						<Grid container jusitfy='space-between' alignItems='strech' spacing='3'>
							<Grid item xs={12} sm={12}>
								<Tests buttonName = "Start Exam" onButtonClick={onButtonClick}/>
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</div>
	);
};

export default AssignmentsPage;
