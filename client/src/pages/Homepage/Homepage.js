import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import {getTests} from '../../actions/tests';

// Components
import Tests from '../../components/Tests/Tests';
import Form from '../../components/Form/Form';

// Images
import exam from '../../images/exam.png';
import SideNav from '../../components/Navbars/SideNav/SideNav';
import TopNav from '../../components/Navbars/TopNav/TopNav';

// CSS
import './Homepage.css'

const Homepage = () => {
	// States
	const [currentId, setCurrentId] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTests());
	}, [currentId, dispatch]);

	return (
		<div>
			<TopNav />
			<SideNav />
			<div className='homepage-container'>
				<Container>
					<AppBar position='static' color='inherit' display="inline-block">
						<Typography variant='h2' align='center'>
							Exams
						</Typography>
						{/* <img className='test-title' src={exam} alt='Exams' /> */}
						<br />
					</AppBar>
					<Grow in>
						<Container>
							<Grid container jusitfy='space-between' alignItems='strech' spacing='3'>
								<Grid item xs={12} sm={7}>
									<Tests setCurrentId={setCurrentId} />
								</Grid>
								<Grid item xs={12} sm={4}>
									<Form currentId={currentId} setCurrentId={setCurrentId} />
								</Grid>
							</Grid>
						</Container>
					</Grow>
				</Container>
			</div>
		</div>
	);
};

export default Homepage;
