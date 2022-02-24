import React from 'react';
import {useEffect} from 'react';
// Components
import Questions from '../../../components/Questions/Questions';
import {useDispatch} from 'react-redux';
// MUI
import {Button} from '@mui/material';
import {getQuestions} from '../../../actions/questions';

const QuestionsPage = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getQuestions());
	}, [dispatch]);
	
	return (
		<div>
			<div className='button-container'>
				<Button
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth
					sx={{
						marginBottom: '10px',
					}}
				>
					Create a Test
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='large'
					type='submit'
					fullWidth
					sx={{
						marginBottom: '10px',
					}}
				>
					Create a Question
				</Button>
			</div>
      <div className="questions-container">
        <Questions questions/>
      </div>
		</div>
	);
};

export default QuestionsPage;
