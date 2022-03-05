import React, { useState, useEffect } from "react";

import { Card, CardContent, Divider, Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// CSS
import "./TakingTestQuestion.css";

const TakingTestQuestion = ({ question, index, questionData, setQuestionData }) => {
   let question_id_value = question.question_id;
   // console.log(question_id_value)

   // State for keeping track of the user's input for one question.
   const [singleQuestionInputData, setSingleQuestionInputData] = useState({ question_id: `${question_id_value}`, question_input: "" });

      // Sending data back to the daddy prop after every input.
      useEffect(() => {
         let found = false; 
         questionData.map((question) => {
            if(question.question_id === question_id_value) {
               found = true;
            }
         }) 
         
         if(!found)
            setQuestionData( [...questionData, singleQuestionInputData]);
      }, [singleQuestionInputData])

   return (
      <div className="card-seperator">
         <Card className="taking-test-question-card" display="flex" allignItems="flex-start" elevation="5">
            <div className="question-number-points-container">
               <p className="question-number">Question {index + 1}</p>
               <p className="question-points">{`${question.question_score} pts`}</p>
            </div>
            <Divider />
            <br />
            <Typography className="question-description" variant="h5" align="center">
               This where we will write the question description. This where we will write the question description. This where we will write the
               question description.
            </Typography>
            <div className="console-container">
               <textarea className="console" type="text" value={singleQuestionInputData.question_input} onChange={(e) => setSingleQuestionInputData({ ...singleQuestionInputData, question_input: e.target.value})} />
            </div>
         </Card>
      </div>
   );
};

export default TakingTestQuestion;
