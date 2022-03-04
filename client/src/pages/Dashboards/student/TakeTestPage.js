import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import { useSelector } from "react-redux";
// Actions
import {getTest} from '../../../actions/tests';


// CSS
import './TakeTestPage.css';

// This page is for students. They can see tests that they need to take.
const TakeTestPage = ({testID}) => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTest(testID));	
	}, [])
	const test = useSelector((state) => state.tests[0]);
	console.log(test);

	return (
		<h1>Taking Test {testID}</h1>
	);
};

export default TakeTestPage;
