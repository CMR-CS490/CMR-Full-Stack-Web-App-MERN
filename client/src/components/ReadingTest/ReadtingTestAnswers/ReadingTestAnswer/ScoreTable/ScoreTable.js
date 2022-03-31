import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Card, Typography, TextField} from "@mui/material"

// Components
import ModalsButton from "../../../../Modals/ModalsButton";

//Redux
import { useSelector } from "react-redux";

// CSS
import "./ScoreTable.css";

// questionID is passed from ReadtingTestAsnwer.js
const ScoreTable = ({ questionID, questionInfo, setScoreObject}) => {

   console.log("qinfo: ", questionInfo)
   
   // This variable makes it so the fields are able to be editable.
   let isEditible = (localStorage.getItem("role") === "teacher") // True if the role is a teacher, false if its a student.
    

   useEffect(() => {
      // setComment(comment)
      setScoreObject({scores})
   }, [])
   
   // const [scoreData, setScoreData] = useState()
   
   const columns = [
      { field: "id", headerName: "ID", width: 90, hide: true, GridColDef: false },
      {
         field: "questionNumber",
         headerName: "Question Number",
         flex: 0.2,
         editable: false,
         sortable: false,
      },
      {
         field: "questionDescription",
         headerName: "Question Description",
         flex: 1,
         editable: isEditible,
         sortable: false,
      },
      {
         field: "score",
         headerName: "Score",
         type: "number",
         flex: 0.2,
         editable: false,
         sortable: false,
      },
      {
         field: "updatedScore",
         headerName: "Updated Score",
         type: "number",
         flex: 0.2,
         editable: isEditible,
         sortable: false,
      },
   ];
   
   // The first and and last rows will always be (Function Name) and (Comments/Total Score)
   // The middle columns will be based on the number of test cases.
   
   // const rows = [
   //    { id: 1, questionNumber: "Function Name", questionDescription: "The function name is correct.", score: 50 },
   //    { id: 2, questionNumber: "Test Case 1", questionDescription: "Testing(2, 3)", score: 25 },
   //    { id: 3, questionNumber: "Test Case 2", questionDescription: "Testing(3, 3)", score: 25 },
   //    { id: 4, questionNumber: "Comments", questionDescription: "Write comments here", score: "Total" },
   // ];
   
   const scores = useSelector((state) => state.scores);
   console.log("%cscores: ", "color:yellow", scores)
   const scoresArray = scores[0].scores; // Turn the redux state to an array of scores.
   console.log("%cScores Array: ", "color:yellow", scoresArray)

   // Find the score that corresponds with this question.

   let scoreData;
   for (const scr in scoresArray) {
      // console.log(scoresArray[scr].question_id)
      if (questionID === scoresArray[scr].question_id) {
         scoreData = scoresArray[scr];
         console.log("scoreData: ", scoreData);
      }
   }

   const [comment, setComment] = useState(`${scoreData.comments}`);
   
   let counter = 1;
   const rows = [];

   // const [totalScore, setTotalScore] = useState(0)
   let totalScore = 0;

   // 1. Pass the function name test to the row.
   rows.push({
      id: counter,
      questionNumber: "Function Name",
      questionDescription: scoreData.functionNameScore == 5 ? "The function name is correct." : "The function name is incorrect.",
      score: scoreData.functionNameScore,
      updatedScore: scoreData.functionNameScore,
   });
   counter++;
   totalScore += parseInt(scoreData.functionNameScore);

   // 2. Pass all the test cases to the rows.
   for (let i = 0; i < scoreData.testcases.length; i++) {
      rows.push({
         id: counter,
         questionNumber: `Test Case ${i + 1}`,
         questionDescription: scoreData.testcases[i].testcase,
         score: scoreData.testcases[i].score,
         updatedScore: scoreData.testcases[i].score
      });
      counter++;
      totalScore += parseInt(scoreData.testcases[i].score);
   }

   // 3. Pass in the comment and total score

   rows.push({ id: counter, questionNumber: "Total Scores", questionDescription: " ", score: totalScore, updatedScore: totalScore });
   counter++;

   

   return (
      <div className="card-seperator">
         <div style={{ height: "400px", width: "100%" }}>
            <DataGrid
               rows={rows}
               columns={columns}
               pageSize={5}
               rowsPerPageOptions={[5]}
               // checkboxSelection
               disableSelectionOnClick
               sx={{
                  bgcolor: "white",
                  boxShadow: 2,
                  border: 1,
               }}
            />
         </div>
         <div className='comment-total-score-container'>
				<Card>
					<div className='taking-test-description-container'>
						<Typography className='taking-test-description' variant='body1' display='inline'>
							Comments: 
						</Typography>

						<TextField disabled={!isEditible} name='comments' variant='outlined' label='Comments' value={score.comments} onChange={e => handleCommentChanges(e)} />

					</div>
					<div className='creator-question-length-container'>
						<Typography className='taking-test-questions-length' align='right' variant='subtitle1' gutterBottom sx={{display: 'inline-flex'}}>
							Total Score: {totalScore}
						</Typography>
					</div>
				</Card>
			</div>
      </div>
   );
};

export default ScoreTable;
