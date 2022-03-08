import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardContent, Divider, Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// CSS
import "./ReadingTestAnswer.css";
import { getQuestion } from "../../../../actions/questions";

const ReadingTestAnswer = ({ question, index }) => {
   let question_id_value = question.question_id;
   // console.log(question_id_value)

   // State for keeping track of the user's input for one question.
   const [singleQuestionInputData, setSingleQuestionInputData] = useState({ question_id: `${question_id_value}`, answer: "asdfasdf", points: question.question_score});

   // Use Redux
   const dispatch = useDispatch();

      // Sending data back to the daddy prop after every input.
      useEffect(() => {
         // Rendering the question description using /actions
         // dispatch(getQuestion(question_id_value))
      }, [dispatch, singleQuestionInputData])

      // Get question data from the redux store.
      const questionState = useSelector((state) => state.questions);
      // console.log("questionState: ", questionState);
      let questionInfo = questionState.filter((question) => question._id === question_id_value)[0];
      
   if (!questionInfo) {
      return <p>loading</p>;
   } 
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
               {questionInfo.question}
            </Typography>
            <div className="console-container">
               <textarea disabled className="console" type="text" value={singleQuestionInputData.answer} />
            </div>
         </Card>
      </div>
   );
};

export default ReadingTestAnswer;
