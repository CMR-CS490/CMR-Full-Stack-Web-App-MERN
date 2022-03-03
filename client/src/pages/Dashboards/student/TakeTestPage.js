import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';

// Actions


// CSS
import './TakeTestPage.css';

// This page is for students. They can see tests that they need to take.
const TakeTestPage = ({testID}) => {
	return (
		<h1>Taking Test {testID}</h1>
	);
};

export default TakeTestPage;
