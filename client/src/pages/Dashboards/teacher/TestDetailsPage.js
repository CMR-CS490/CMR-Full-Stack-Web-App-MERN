import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
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
      // dispatch(getTest(testID));
      dispatch(getAnswers(testID));
   }, [dispatch]);

   // State for keep track of the selected checkboxed questions.
   const [questionCheck, setQuestionCheck] = useState([]);

   // // States for popup modals.
   // const [displayTestModal, setDisplayTestModal] = useState({visible: false})
   // const [displayQuestionModal, setDisplayQuestionModal] = useState({visible: false})

   return (
      <div className="test-details-container">
         {/* <TestDetails /> */}
         <br />
         <Container>
            <Grow in>
               <Container>
                  <Grid container jusitfy="space-between" alignItems="strech" spacing="3">
                     <Students />
                     {/* <Tests buttonName1="Start Exam" buttonName2="View Score" onButtonClick1={onButtonClick1} onButtonClick2={onButtonClick2} /> */}
                  </Grid>
               </Container>
            </Grow>
         </Container>
      </div>
   );
};

export default TestDetailsPage;
