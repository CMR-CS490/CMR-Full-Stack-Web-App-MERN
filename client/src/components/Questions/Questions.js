import React from 'react';
import Question from './Question/Question';
import {CircularProgress } from "@mui/material";
//API
import { useSelector } from "react-redux";

const Questions = () => {

	const questions = useSelector((state) => state.questions); 
	console.log(questions)

	return (
		!questions.length ? <CircularProgress/> : (

					questions.map((question) => (
							<Question question={question} />
					))

		)
	);
};

export default Questions;
