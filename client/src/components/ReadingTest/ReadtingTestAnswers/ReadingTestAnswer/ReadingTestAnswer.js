import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Divider, Typography } from "@mui/material";

// Redux
import { getQuestion } from "../../../../actions/questions";

// Components
import ScoreTable from "./ScoreTable/ScoreTable"

// CSS
import "./ReadingTestAnswer.css";

const ReadingTestAnswer = ({ question, index }) => {
   let question_id_value = question.question_id;

   // State for keeping track of the user's input for one question.
   const [singleQuestionInputData, setSingleQuestionInputData] = useState({
      question_id: `${question_id_value}`,
      answer: "Loading...",
      points: question.question_score,
   });

   // State for Rerender once the answer data is in.
   const [answerDataBoolean, setAnswerDataBoolean] = useState(false);

   // Use Redux
   const dispatch = useDispatch();

   // Get question data from the redux store.
   const questionState = useSelector((state) => state.questions);

   // Filter one question matching the ID 
   let questionInfo = questionState.filter((question) => question._id === question_id_value)[0];

   // Geting the answer data from the redux store.
   const answerState = useSelector((state) => state.answers);
   console.log("ReadingTestAsnwer: ", answerState)
   const answerArray = answerState.questions;
   // if (answerArray) {
   //    console.log(answerArray)
   // }

   let answerData = "";
   // Iterate through the array and find the answerData inputed by the student by matching question_id's from the answerArray and the queestion.


   // Sending data back to the daddy prop after every input.
   useEffect(() => {
      for (const ans in answerArray) {
         // console.log(answerArray[ans])
         if (question_id_value === answerArray[ans].question_id) {
            answerData = answerArray[ans].answer;
            // console.log("Answer Data: ", answerData)
            // Now that we found a match for the ID's and found the student's input in the DB, set the state of the answer's input.
            setAnswerDataBoolean(true);
         }
      }
      setSingleQuestionInputData({ ...singleQuestionInputData, answer: answerData });
   }, [answerDataBoolean]);

   // If the answer array contains the same question_id, then get that object.
   // const answerData = answerArray.filter(ans => Object.values(answerArray).includes(question_id_value));
   // // answerArray.filter(answer =>
   // if (answerData) {
   //    console.log(answerData)
   // }

   // Now access that object.

   // Getting the submitted answer by the student.

   // Rendering the question description using /actions
   // setSingleQuestionInputData({...singleQuestionInputData, answer: ""})

   if (!questionInfo) {
      return <p>loading</p>;
   }
   return (
      <div id={`taking-test-question-card-number-${index}`} className={"card-seperator " + (index === 0 ? "" : "hidden")}>
         <Card className="taking-test-question-card " display="flex" allignItems="flex-start" elevation="5">
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
         <ScoreTable questionID={question_id_value} questionInfo={questionInfo} />
      </div>
   );
};

export default ReadingTestAnswer;
