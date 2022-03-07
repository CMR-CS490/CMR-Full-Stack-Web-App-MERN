import React, {useEffect } from "react";
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './Test.css';

const Test = ({test, buttonName1, buttonName2, onButtonClick1, onButtonClick2}) => {
	if(buttonName1 === 'Publish') {
		if(test.visible) {
			buttonName1 = "Unpublish";
		} else {
			buttonName1 = "Publish";
		}
	}

	return (
		<Card sx={{maxWidth: 345}}>
			<CardMedia component='img' src={test.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
			<Divider />
			<Typography variant='h3' align='center' gutterBottom>
				{test.title}
			</Typography>
			<div>
				<CardContent>
					<Typography variant='subtitle1' gutterBottom>
						{test.description}
					</Typography>
				</CardContent>
			</div>
			<div className='test-creator'>
				<Typography variant='body2' align='right' color='textSecondary'>
					{`Made By: ${test.creator}`}
				</Typography>
			</div>
			<CardActions>
				<Button
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth
					sx={{
						marginBottom: '10px',
					}}
					onClick={() => {onButtonClick1(test)}}
				>
					{buttonName1}
				</Button>
				<Button
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth
					sx={{
						marginBottom: '10px',
					}}
					onClick={() => {onButtonClick2(test)}}
				>
					{buttonName2}
				</Button>
			</CardActions>
		</Card>
	);
};

export default Test;
