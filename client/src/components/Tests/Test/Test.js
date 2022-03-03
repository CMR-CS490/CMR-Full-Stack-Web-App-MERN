import React from 'react';
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './Test.css';

const Test = ({test, buttonName, onButtonClick}) => {
	return (
		<Card sx={{maxWidth: 345}}>
			{/* <CardMedia image={test.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={test.title} /> */}
			<CardMedia component='img' src={test.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
			<Divider />
			<Typography variant='h3' align='center' gutterBottom>
				{test.title}
			</Typography>
			{/* <Divider /> */}
			<div>
				<CardContent>
					<Typography variant='subtitle1' gutterBottom>
						{test.description}
					</Typography>
				</CardContent>
			</div>
			<div className='teat-creator'>
				<Typography variant='body2' align='right' color='textSecondary'>
					{`Made By: ${test.creator}`}
				</Typography>
			</div>
			<CardActions>
				{/* <Button size="small" color="primary" onClick={() => {}}>
               <DeleteIcon fontsize="small" />
               Delete
            </Button> */}
			</CardActions>
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
					onClick={() => {onButtonClick(test._id)}}
				>
					{buttonName}
				</Button>
			</CardActions>
		</Card>
	);
};

export default Test;
