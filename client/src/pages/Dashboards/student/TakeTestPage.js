import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useSelector } from "react-redux";
// Actions
import { getTest } from "../../../actions/tests";
import { getQuestions } from "../../../actions/questions";

// Components
import ModalsButton from "../../../components/Modals/ModalsButton";
import TestDetails from "../../../components/TakingTest/TestDetails/TestDetails";
import TakingTestQuestions from "../../../components/TakingTest/TestDetails/TakingTestQuestions/TakingTestQuestions";

// CSS
import "./TakeTestPage.css";

// This page is for students. They can see tests that they need to take.
const TakeTestPage = ({ testID }) => {
	
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getTest(testID));
   }, []);

   // State for the test object that the page initially renders
   const test = useSelector((state) => state.tests[0]);

   // State for getting all the questions to render. (Need to be filtered)
   const questions = useSelector((state) => state.questions);

   // State to store the answer for each question for the API call to submit a test.

   // A student clicks submit when they have answered all the questions. (Or left some blank.)
   function handleSubmit() {
      console.log("hi");
   }

    //   console.log(test);
//    console.log("Taking Test: ", testID);
      console.log("Test Object: ", test)
   return (
      <div className="taking-test-container">
         <div className="taking-test-details-container">
            {test.title}
            {test.description}
            {test.creator}
            {test.questions.length}
            {/* <TestDetails
               testTitle={test.title}
               testDescription={test.description}
               testCreator={test.creator}
               testQuestionLength={test.questions.length}
            /> */}
            {/* <TakingTestQuestions /> */}
         </div>

         <ModalsButton text="Submit Test" action={handleSubmit} color="primary"></ModalsButton>
      </div>
   );
};

export default TakeTestPage;
