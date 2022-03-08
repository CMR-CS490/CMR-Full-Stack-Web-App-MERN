import React, { useEffect, useState } from "react";
import { Card, CircularProgress } from "@mui/material";

// Components
import ReadingTestAnswer from "./ReadingTestAnswer/ReadingTestAnswer";

//Redux Store
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../../actions/questions";

const ReadingTestAnswers = () => {
   // const dispatch = useDispatch();
   const dispatch = useDispatch();
   // Getting question from the store.

   const [isLoading, setLoading] = useState(true);

   const test = useSelector((state) => state.tests[0]); // Obtain the array of questions to be outputed.

   let questionsArray = [];
   useEffect(() => {
      if (test) {
         // questionsArray = test.questions;
         console.log("questionsArray: ", questionsArray);
         setLoading(false);
      }
   }, [isLoading, test]);

   console.log("Test from store: ", test);

   // To avoid crashing.
   if (test) {
      questionsArray = test.questions;
      questionsArray.map((question) => {
         dispatch(getQuestion(question.question_id));
      })
   } else {
      questionsArray= []
   }
   // questionsArray = test.questions;

   return (
      <div>
         {isLoading ? (
            // false
            <CircularProgress />
         ) : (
            // true
            questionsArray.map((question, index) => (
               <ReadingTestAnswer index={index} question={question} />
            ))
         )}
      </div>
   );
};

export default ReadingTestAnswers;
