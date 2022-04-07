import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Card, Typography, TextField} from "@mui/material"

// Components
import ModalsButton from "../../../../Modals/ModalsButton";

//Redux
import { useDispatch, useSelector } from "react-redux";

// CSS
import "./ScoreTable.css";

//api
import {updateIndividualScores} from "../../../../../actions/scores"


// questionID is passed from ReadtingTestAsnwer.js
const ScoreTable = ({ questionID, questionInfo}) => {

   //console.log("qinfo: ", questionInfo)
   
   
   // This variable makes it so the fields are able to be editable.
   let isEditible = (localStorage.getItem("role") === "teacher") // True if the role is a teacher, false if its a student.
    
   const dispatch = useDispatch();
   useEffect(() => {
      // setComment(comment)
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

   
   const scores = useSelector((state) => state.scores);
   //console.log("%cscores: ", "color:yellow", scores)
   const scoresArray = scores[0].scores; // Turn the redux state to an array of scores.
   //console.log("%cScores Array: ", "color:yellow", scoresArray)

   // Find the score that corresponds with this question.

   let scoreData;
   for (const scr in scoresArray) {
      // console.log(scoresArray[scr].question_id)
      if (questionID === scoresArray[scr].question_id) {
         scoreData = scoresArray[scr];
         // console.log("scoreData: ", scoreData);
      }
   }


   const [score, setScore] = useState(scoreData)

   if(score.length == 0) {
      return <></>
   }

   
   let counter = 1;
   const rows = [];

   // const [totalScore, setTotalScore] = useState(0)
   let totalScore = 0;
   let updatedTotalScore = 0;

   // 1. Pass the function name test to the row.
   rows.push({
      id: counter,
      questionNumber: "Function Name",
      questionDescription: score.functionNameScore == 5 ? "The function name is correct." : "The function name is incorrect.",
      score: score.functionNameScore,
      updatedScore: score.updatedFunctionNameScore,
   });
   counter++;
   totalScore += parseFloat(score.functionNameScore);
   updatedTotalScore += parseFloat(score.updatedFunctionNameScore)


   // 2. Pass all the test cases to the rows.
   for (let i = 0; i < score.testcases.length; i++) {
      rows.push({
         id: counter,
         questionNumber: `Test Case ${i + 1}`,
         questionDescription:   `Testing ${score.testcases[i].testcase} => ${score.testcases[i].expectedAnswer}, and recieved  ${score.testcases[i].actualAnswer} `,
         score: score.testcases[i].score,
         updatedScore: score.testcases[i].teacherScore
      });
      counter++;
   
      totalScore += parseFloat(score.testcases[i].score);
      updatedTotalScore += parseFloat(score.testcases[i].teacherScore);
      
   }

     //3. If there is a constraint for the question, add the row, and the details.
     if(score.constraintScore) {
      rows.push({
         id: counter,
         questionNumber: "Constraint Check",
         questionDescription: score.constraintScore == 5 ? "The constraint shown in the code" : "The function name is NOT in the code.",
         score: score.constraintScore,
         updatedScore: score.updatedConstraintScore,
      });

      counter++;
   
      totalScore += parseFloat(score.constraintScore);
      updatedTotalScore += parseFloat(score.updatedConstraintScore);

   }

   // Remove rounding errors from total score. For example: 3.33 + 3.33 + 3.33 = 10.0.
   totalScore = Math.round(totalScore * 100) / 100;
   totalScore = totalScore.toFixed(2);
   updatedTotalScore = Math.round(updatedTotalScore * 100) / 100;
   updatedTotalScore = (updatedTotalScore.toFixed(2));

   // 3. Pass in the comment and total score

   rows.push({ id: counter, questionNumber: "Total Scores", questionDescription: " ", score: totalScore, updatedScore: updatedTotalScore });
   counter++;
   const handleTestScoreChanges = (e) => {
     console.log(e)

     //Changing function Name score
     if(e.id == 1) {
         setScore({...score, updatedFunctionNameScore : e.value})
         return;
     }

     //We are changing testcase score
     if(e.id > 1 && e.id <= 1+score.testcases.length) {
        let testcases = [];
        let i = 2;
        score.testcases.forEach((testCase) => {
            if(e.id == i) {
               testcases.push({...testCase, teacherScore: e.value})
            } else {
               testcases.push(testCase)
            }
            i++;
           
        })

        setScore({...score, testcases: testcases})

     }

      //We are changing constraint score
     if(e.id > 1+score.testcases.length) {
         setScore({...score, updatedConstraintScore : e.value})
     }
    
     
   }
   const handleCommentChanges =(e) => {
      setScore({...score, comments: e.target.value})
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      let scoreSent = {...score};

      delete scoreSent['_id'];
      scoreSent.testcases.forEach((testcase)=> {
         delete testcase['_id'];
      })
      //console.log(score)

      dispatch(updateIndividualScores(scores[0]._id, questionID, scoreSent))

      
   }

   return (
      <div className="card-seperator">
         <div style={{ height: "400px", width: "100%" }}>
            <DataGrid
               rows={rows}
               columns={columns}
               pageSize={5}
               rowsPerPageOptions={[5]}
               // checkboxSelection
               disableColumnFilter
               disableSelectionOnClick
               disableColumnSelector
               onCellEditCommit = {handleTestScoreChanges}
               sx={{
                  bgcolor: "white",
                  boxShadow: 2,
                  border: 1,
               }}
               isCellEditable={(params) => params.row.questionNumber != "Total Scores"}
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
						<Typography className='taking-test-questions-length' align='right' variant='subtitle1' gutterBottom sx={{display: 'inline-flex', fontWeight: 'bold'}}>
							Total Score: {updatedTotalScore}
						</Typography>
					</div>
				</Card>


            {isEditible? <ModalsButton text="Save Changes" action={handleSubmit} color="primary"></ModalsButton>: <></> }
			</div>
      </div>
   );
};

export default ScoreTable;
