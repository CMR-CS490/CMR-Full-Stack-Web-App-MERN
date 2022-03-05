import React, { useEffect, useState } from "react";
import { Card, CircularProgress } from "@mui/material";

// Components
import TakingTestQuestion from "./TakingTestQuestion/TakingTestQuestion";

//Redux Store
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../../../actions/questions";
import { getQuestions } from "../../../../api";

const TakingTestQuestions = ({ questionData, setQuestionData }) => {
   // const dispatch = useDispatch();

   // Getting question from the store.

   const [isLoading, setLoading] = useState(true);

   const test = useSelector((state) => state.tests[0]); // Obtain the array of questions to be outputed.

   useEffect(() => {
      if (test) {
         setLoading(false);
      }
   }, [isLoading]);

   console.log("Test from store: ", test);
   // console.log("%cComponent: TakingTestQuestions", "color:pink", "questions: ", test.questions);
   const questionsArray = test.questions;

   // let questions = useSelector((state) => state.questions);
   // console.log("questions: ", questions);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         {isLoading ? (
            // false
            <CircularProgress />
         ) : (
            // true
            questionsArray.map((question, index) => (
               <TakingTestQuestion index={index} question={question} questionData={questionData} setQuestionData={setQuestionData} />
            ))
         )}
      </div>
   );

   // let testQuestions = ["empyt"], testQuestionsLength;
   // let test = useSelector((state) => state.tests[0]);
   // console.log("test: ", test)

   // if (test) {
   //    let testQuestions = test.questions;
   //    console.log("%cComponent: TakingTestQuestions", "color:green", "questions: ", testQuestions);
   // }

   // useEffect(() => {
   //    if (test) {
   //       let testQuestions = test.questions;
   //       console.log("%cComponent: TakingTestQuestions", "color:green", "questions: ", testQuestions);
   //       testQuestionsLength = testQuestions.length
   //    }
   // }, [testQuestions[0], testQuestionsLength])

   // //    const questions = useSelector((state) => state.questions);
   //    console.log("questions: ", questions);

   // if ((testQuestionsLength === 1)) {
   //    return <p>loading</p>;
   // } else {
   //    return (
   //       <div>
   //          {testQuestions[0]}
   //          {/* {testQuestions.map((question) => <TakingTestQuestion key={question._id} question={question} />)} */}
   //       </div>
   //    );
   // }
};

export default TakingTestQuestions;
