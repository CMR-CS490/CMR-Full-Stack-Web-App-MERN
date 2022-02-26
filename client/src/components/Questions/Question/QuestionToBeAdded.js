import React, { useState } from "react";
import { Card, CardActions, CardContent, Checkbox, Divider, Hidden, Typography, TextField } from "@mui/material";

import "./Question.css";
import { borderRight } from "@mui/system";

const QuestionToBeAdded = (question, questionData, setQuestionData) => {
   // console.log("QuestionToBeAdded Props: ", { props });

   console.log("%cComponent QuestionToBeAdded", "color:pink;", "question: ", question , "questionData: ", questionData, "setQuestionData: ", setQuestionData)


   const [singleQuestionData, setSingleQuestionData] = useState({question_ids: ''});

   // handleChange(event) {    props.setQuestionData({value: event.target.value});  }

   return (
      <Card className="question" display="flex" allignItems="flex-start" elevation="5">
         <CardActions sx={{ display: "inline-flex", width: "3%" }}>
            <div className="score-container">
               <TextField name="title" label="Score"  fullWidth onChange={(e) => {}} />
            </div>
         </CardActions>
         <CardContent sx={{ display: "inline-flex", justifyContent: "center", width: "92%" }}>
            <Typography className="questionHeader" variant="h5">
               {/* {question.question} */}
            </Typography>
            <Divider />
         </CardContent>
         <CardContent>
            <Typography color="primary" variant="h6" gutterBottom sx={{ display: "inline-flex", width: "50%", justifyContent: "left" }}>
               Topic: {question.topic}
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
