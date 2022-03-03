import React, { useState }from 'react';
import {Card, CardActions, CardContent, Checkbox, Divider, Hidden, Typography} from '@mui/material';

import './Question.css';
import {borderRight} from '@mui/system';

const Question = (props) => {
	// console.log("Question Props: ", {props})

	// console.log("%cComponent Question", "color:lightgreen;", "questionCheck: ", props.questionCheck, "checkboxVisible: ", props.checkboxVisible, "scoreInputVisible: ", props.scoreInputVisible)

	const [checkboxVisible, setcheckboxVisible] = useState(props.checkboxVisible);
	const [scoreInputVisible, setscoreInputVisible] = useState(props.scoreInputVisible);

	const styleCheckbox = {}
	// Visiblity of the checkbox depends on the passed props.
	let checkBoxClassName = "checkbox-container";
	if (props.checkboxVisible === false) {
		const styleCheckbox = {
			visibility: "hidden"
		}
		// console.log(styleCheckbox)
	}
	const handleCheckbox = () => {
		let found = false;
		props.questionCheck.map((question) => {
			if(question === props.question._id) {
				found = true;
			}
		})

		if(found) {
			props.setQuestionCheck(props.questionCheck.filter(item => item !== props.question._id));
		} else {
			props.setQuestionCheck([...props.questionCheck, props.question._id]);	
		}


	};
	
	return (
		<Card className = "question-card" display='flex' allignItems='flex-start' elevation='5'>
			<CardActions sx={{display: 'inline-flex', width:"3%"}}>
				<div className={checkBoxClassName} style={styleCheckbox}>
					{/* {console.log(styleCheckbox)} */}
					<Checkbox
						sx={{
							borderRight: 3,
							borderRadius: 0.1,
						}}
						onClick={handleCheckbox}
						>
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
