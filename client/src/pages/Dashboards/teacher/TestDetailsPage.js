import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTest } from "../../../actions/tests";
import { getAnswers } from "../../../actions/answers";

// Components
import TestDetails from "./../../../components/TakingTest/TestDetails/TestDetails";
import Students from "./../../../components/Students/Students";

// MUI
import { Button } from "@mui/material";
//CSS
import "./TestDetailsPage.css";

const TestDetailsPage = ({ testID }) => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getTest(testID));
      dispatch(getAnswers(testID));
   }, [dispatch]);

   // Get answer data from Redux Store.
   const answers = useSelector((state) => state.answers);

   // State for keeping track of the ID of the answer (Exam of one student).
   // const [answerID, setAnswerID] = useState([]);

   // // States for popup modals.
   // const [displayTestModal, setDisplayTestModal] = useState({visible: false})
   // const [displayQuestionModal, setDisplayQuestionModal] = useState({visible: false})

   // View Results Button
   const onButtonClick1 = (answerID) => {
      console.log(answerID)
      window.location.href = `/teacher/tests/results/${answerID}`;
   };

   // Autograde Button 
   const onButtonClick2 = () => {
      console.log("Autograde");
   };

   return !answers.length ? (
      // If there are no answers in the DB.)
      <p>There are currently no exams submitted for this exam.</p>
   ) : (
      <div className="test-details-container">
         <TestDetails showButton={false}/>
         <br />
         <Container>
            <Grow in>
               <Container>
                  <Grid container jusitfy="space-between" alignItems="strech" spacing="3">
                     <Students buttonName1="View Results" onButtonClick1={onButtonClick1} buttonName2="AutoGrade" onButtonClick2={onButtonClick2} />
                     {/* <Tests buttonName1="Start Exam" buttonName2="View Score" onButtonClick1={onButtonClick1} onButtonClick2={onButtonClick2} /> */}
                  </Grid>
               </Container>
            </Grow>
         </Container>
      </div>
   );
};

export default TestDetailsPage;
