import React from 'react';

// Components
import Questions from '../../../components/Questions/Questions';

// MUI
import {Button} from '@mui/material';

const QuestionsPage = () => {
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
        <Questions />
      </div>
		</div>
	);
};

export default QuestionsPage;
