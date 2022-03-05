import React, { useState } from "react";
import QuestionToBeAdded from "./Question/QuestionToBeAdded";
import { CircularProgress } from "@mui/material";

//Redux Store
import { useSelector } from "react-redux";

const Questions = ({ questionData, setQuestionData, questionCheck }) => {
   // Reducer
   const questions = useSelector((state) => state.questions);
   // console.log('QuestionsToBeAdded: ', {questions});
   // console.log('Questions to filter', questionCheck);

   // questionsFiltered // Array that we pop to from questions array of objects.
   // console.log('questions objects');
   // "Addition"
   let questionsFiltered;
   let questionsFilteredStep2 = [];
   // Array that we pop to from questions array of objects.
   for (let i = 0; i < questionCheck.length; i++) {
      questionsFiltered = questions.filter((question) => question._id.includes(questionCheck[i]));
      questionsFiltered.forEach((element) => questionsFilteredStep2.push(element));
   }

   // console.log('questionsFilteredstep2: ', questionsFilteredStep2);

   // for (const singleQuestion in questions) {
   //    console.log("Single Questions:", singleQuestion)
   // }

   // Filter the questions based on if the question is checked in the questions page. questionCheck === questions._id (Then add this to the filter questioned)

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
            questionsFilteredStep2.map((question) => (
               <QuestionToBeAdded question={question} questionData={questionData} setQuestionData={setQuestionData} />
            ))
         )}
      </div>
   );
};

export default Questions;
