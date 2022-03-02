import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Checkbox, Divider, Hidden, Typography, TextField } from "@mui/material";

import "./Question.css";
import { borderRight } from "@mui/system";

const QuestionToBeAdded = ({question, questionData, setQuestionData}) => {
   // console.log("QuestionToBeAdded Props: ", { props });

   console.log("%cComponent QuestionToBeAdded", "color:pink;", "question: ", question , "questionData: ", questionData, "setQuestionData: ", setQuestionData)

   let question_id_value = question._id;
   // console.log("%cQuestion ID: ", "color:red;", question_id);

   // State for the scores
   const [singleQuestionScoreData, setSingleQuestionScoreData] = useState({question_id: `${question_id_value}`, question_score: ''});

   // const [questionData, setQuestionData] = useState([{question_id: '', question_score: ''}]);


   // Sending data back to the daddy prop after every input.
   // useEffect(() => {
   //    // setQuestionData( ...questionData, singleQuestionScoreData);
   //    // setQuestionData(singleQuestionScoreData);
   // }, [singleQuestionScoreData])

   

   

   // handleChange(event) {    props.setQuestionData({value: event.target.value});  }

   return (
      <Card className="question-card" display="flex" allignItems="flex-start" elevation="5">

         <CardContent sx={{ display: "inline-flex", justifyContent: "center", width: "92%" }}>
            <Typography className="questionHeader" variant="h5">
               {question.question}
            </Typography>
            <Divider />
         </CardContent>
         <CardContent>
            <Typography color="primary" variant="h6" gutterBottom sx={{ display: "inline-flex", width: "50%", justifyContent: "left" }}>
               Topic: {question.topic}
               {/* {question._id} */}
               <CardActions sx={{ display: "inline-flex", width: "30%", justifyContent: "center"}}>
            <div className="score-container">
               <TextField name="title" label="Score" value={singleQuestionScoreData.question_score} fullWidth onChange={(e) => setSingleQuestionScoreData({ ...singleQuestionScoreData, question_score: e.target.value})} />
            </div>
         </CardActions>
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ display: "inline-flex", width: "50%", justifyContent: "right" }}>
               Difficulty: {question.difficulty}
               {question.question_ids}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default QuestionToBeAdded;
