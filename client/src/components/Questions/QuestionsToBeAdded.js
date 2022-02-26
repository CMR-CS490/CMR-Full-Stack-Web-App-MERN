import React, { useState } from "react";
import QuestionToBeAdded from "./Question/QuestionToBeAdded";
import { CircularProgress } from "@mui/material";
//API
import { useSelector } from "react-redux";

const Questions = ({questionData, setQuestionData }) => {

   
   // Reducer
   const questions = useSelector((state) => state.questions);
   console.log("Questions: ", { questions }, );
   
   // console.log("%cComponent Questions", "color:green;", "questionCheck: ", questionCheck, "questions array: ", questions, "checkboxVisible: ", checkboxVisible, "scoreInputVisible: ", scoreInputVisible)

   return (
      <div>
         {/* <button onClick={console.log("Questions Props: ", {questionCheck}, {setQuestionCheck})}>
            test
         </button> */}
         {!questions.length ? (
            // false
            <CircularProgress />
         ) : (
            // true
            questions.map((question) => <QuestionToBeAdded question={question} questionData={questionData} setQuestionData={setQuestionData} />)
         )}
      </div>
   );
};

export default Questions;
