import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Divider, Container, AppBar, Typography, Grow, Grid } from "@mui/material";


// axios
import axios from "axios";

// Actions
import { getTest } from "../../../actions/tests";
import { getQuestions } from "../../../actions/questions";
import { createAnswer } from "../../../actions/answers";

// Components
import ModalsButton from "../../../components/Modals/ModalsButton";
import TakingTestQuestions from "../../../components/TakingTest/TestDetails/TakingTestQuestions/TakingTestQuestions";
import TestDetails from "../../../components/TakingTest/TestDetails/TestDetails";
import TakingTestQuestionNavigation from "../../../components/TakingTest/TestDetails/TakingTestQuestionNavigation/TakingTestQuestionNavigation";

// CSS
import "./TakeTestPage.css";

// This page is for students. They can see tests that they need to take.
const TakeTestPage = ({ testID }) => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getTest(testID));
   }, [dispatch]);

   // State for keeping track of the user's input for each question.
   const [questionData, setQuestionData] = useState([]);

   // State that indicates how many question there are in a test. This is needed for the pagintation component and the question navigation functionality.
   const [totalQuestions, setTotalQuestions] = useState(0);
   

   console.log("%cComponent: TakeTestPage", "color:blue", "testID: ", testID);

   // A student clicks submit when they have answered all the questions. (Or left some blank.)

   function handleSubmit() {
      let testAnswers = {test_id : testID, username: localStorage.getItem('username'), questions: questionData}
      dispatch(createAnswer(testAnswers));

      // Redirect to the student's dashboard. (setTimeout is used to allow the API to finish creating the answer.)
      setTimeout(() => {window.location.href = "/student"} , 1000);


   }

   


   function handleCancel() {
      window.history.back()
   }

   return (
      <div className="taking-test-container">
         <div className="taking-test-details-container">
            <TestDetails showButton={true} />
            <br />
            <TakingTestQuestions questionData={questionData} setQuestionData={setQuestionData} setTotalQuestions={setTotalQuestions} />
            <br />
            <TakingTestQuestionNavigation totalQuestions={totalQuestions} />
         </div>
         <ModalsButton text="Submit Test" action={handleSubmit} color="primary"></ModalsButton>
         <ModalsButton text="Cancel" action={handleCancel} color="secondary"></ModalsButton>
      </div>
   );
};

export default TakeTestPage;


   // const sendGetRequest = async () => {
   //    try {
   //        const response = await axios.get('http://localhost:5002/api/tests/621fffd19fa288670ac4190f');
   //        console.log(response.data);
   //        console.log(response.status);
   //        console.log(response.statusText);
   //        console.log(response.headers);
   //        console.log(response.config);
   //    } catch (err) {
   //       // Handle Error Here
   //       console.error(err);
   //    }
   // };

   // let testData = sendGetRequest();

   //    const [listOfQuestions, setListOfQuestions] = useState([])

   // const test = useSelector((state) => state.tests[0]);

   //    const test = axios.get('http://localhost:5002/api/tests/621fffd19fa288670ac4190f')
   //   .then((response) => {
   //     console.log(response.data);
   //     console.log(response.status);
   //     console.log(response.statusText);
   //     console.log(response.headers);
   //     console.log(response.config);
   //   });

   // console.log("test data response: ", testData);
   //   console.log("test data questions: ", testData.questions)

   // State for the test object that the page initially renders
   //    const test = useSelector((state) => state.tests[0]);
   //    console.log("Test Object: ", test);

   // State for getting all the questions to render. (Need to be filtered)
   // const questions = useSelector((state) => state.questions);

   // State to store the answer for each question for the API call to submit a test.