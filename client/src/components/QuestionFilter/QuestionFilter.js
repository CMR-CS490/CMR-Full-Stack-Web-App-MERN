import React from "react";

import {TextField, Select, MenuItem, Paper} from "@mui/material";

import "./QuestionFilter.css";

const QuestionFilter = ({filterData, setFilterData}) => {
	return (
		<div className='question-filter-container'>
			<Paper
				elevation={8}
				variant='outlined'
				sx={{
					padding: 2,
				}}
			>
				<div className='filter-title'>
					<p>Filter</p>
				</div>
				<div className='filter-fields'>
					<Select
						name='topic'
						label='Topic'
						onChange={(e) => setFilterData((filterData) => ({...filterData, topic: e.target.value}))}
						sx={{
							width: "25%",
							margin: "10px 0",
						}}
					>
						<MenuItem value=''>None</MenuItem>
                        <MenuItem value='Addition'>Addition</MenuItem>
						<MenuItem value='Subtraction'>Subtraction</MenuItem>
                        <MenuItem value='Multiplication'>Multiplication</MenuItem>
                        <MenuItem value='Exponent'>Exponent</MenuItem>
                        <MenuItem value='Arrays'>Arrays</MenuItem>
                        <MenuItem value='Operators'>Operators</MenuItem>
                        <MenuItem value='For Loop'>For Loop</MenuItem>
                        <MenuItem value='While Loop'>While Loop</MenuItem>
                        <MenuItem value='Recursion'>Recursion</MenuItem>
					</Select>

					<Select
						name='difficulty'
						label='Difficulty'
						onChange={(e) => setFilterData((filterData) => ({...filterData, difficulty: e.target.value}))}
						sx={{
							width: "25%",
							margin: "10px 0",
						}}
					>
						<MenuItem value=''>None</MenuItem>
						<MenuItem value='Easy'>Easy</MenuItem>
						<MenuItem value='Medium'>Medium</MenuItem>
						<MenuItem value='Hard'>Hard</MenuItem>
					</Select>

					<TextField
						name='keyword'
						variant='outlined'
						label='Keyword'
						onChange={(e) => setFilterData((filterData) => ({...filterData, keyword: e.target.value}))}
						sx={{
							width: "50%",
							margin: "10px 0",
						}}
					/>
				</div>
			</Paper>
		</div>
	);
};

export default QuestionFilter;
