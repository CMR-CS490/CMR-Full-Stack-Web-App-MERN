import React, { useState } from "react";
import Question from "./Question/Question";
import { CircularProgress } from "@mui/material";
//API
import { useSelector } from "react-redux";

const Questions = ({questionCheck, setQuestionCheck}) => {

   // Reducer
   const questions = useSelector((state) => state.questions);
   console.log("Questions: ", { questions });

   return (
      <div>
         <button onClick={console.log("Questions Props: ", {questionCheck}, {setQuestionCheck})}>
            test
         </button>
         {!questions.length ? (
            // false
            <CircularProgress />
         ) : (
            // true
            questions.map((question) => <Question question={question} questionCheck={questionCheck} setQuestionCheck={setQuestionCheck} />)
         )}
      </div>
   );
};

export default Questions;
