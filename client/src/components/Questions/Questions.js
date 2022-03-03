import React, { useState } from "react";
import Question from "./Question/Question";
import { CircularProgress } from "@mui/material";
//API
import { useSelector } from "react-redux";

const Questions = ({questionCheck, setQuestionCheck, checkboxVisible, scoreInputVisible}) => {

   
   // Reducer
   const questions = useSelector((state) => state.questions);
   // console.log("Questions: ", { questions }, );
   
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
            questions.map((question) => <Question key={question._id} question={question} questionCheck={questionCheck} setQuestionCheck={setQuestionCheck} checkboxVisible={checkboxVisible} scoreInputVisible={scoreInputVisible} />)
         )}
      </div>
   );
};

export default Questions;
