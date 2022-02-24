import React from 'react';
import {Card, CardActions, CardContent, Checkbox, Divider, Typography} from '@mui/material';

import './Question.css';
import {borderRight} from '@mui/system';

const Question = (props) => {
	return (
		<Card className = "question" display='flex' allignItems='flex-start' elevation='5'>
			<CardActions sx={{display: 'inline-flex', width:"3%"}}>
				<div className='checkbox-container'>
					<Checkbox
						sx={{
							borderRight: 3,
							borderRadius: 0.1,
						}}
					>
						Test
					</Checkbox>
				</div>
			</CardActions>
			<CardContent sx={{display: 'inline-flex', justifyContent:"center", width:"92%"}}>
				<Typography className = "questionHeader" variant='h5'>{props.question.question}</Typography>
				<Divider />
			</CardContent>
			<CardContent >
				<Typography color='primary' variant='h6' gutterBottom sx={{display: 'inline-flex', width:"50%", justifyContent: 'left'}}>
					Topic: {props.question.topic}
				</Typography>
				<Typography variant='h6' gutterBottom sx={{display: 'inline-flex', width:"50%", justifyContent: 'right'}}>
					Difficulty: {props.question.difficulty}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default Question;
