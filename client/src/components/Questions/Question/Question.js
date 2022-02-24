import React from 'react';
import {Card, CardActions, CardContent, Checkbox, Divider, Typography} from '@mui/material';

import './Question.css';
import {borderRight} from '@mui/system';

const Question = () => {
	return (
		<Card display='flex' allignItems='flex-start' elevation='5'>
			<CardActions sx={{display: 'inline-flex', width:"3%"}}>
				<div className='checkbox-container'>
					<Checkbox
						sx={{
							borderRight: 3,
							borderRadius: 1,
						}}
					>
						Test
					</Checkbox>
				</div>
			</CardActions>
			<CardContent sx={{display: 'inline-flex', justifyContent:"center", width:"92%"}}>
				<Typography variant='h5'>Question Desciption</Typography>
				<Divider />
			</CardContent>
			<CardContent >
				<Typography color='primary' variant='h6' gutterBottom sx={{display: 'inline-flex', width:"50%", justifyContent: 'left'}}>
					Question Category
				</Typography>
				<Typography variant='h6' gutterBottom sx={{display: 'inline-flex', width:"50%", justifyContent: 'right'}}>
					Question Difficulty
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Question;
