import React from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Card, CardContent, Divider, Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// Components
import ModalsButton from "../../Modals/ModalsButton";

// CSS
import "./TestDetails.css";

const TestDetails = ({ setListOfQuestions, showButton }) => {
   const test = useSelector((state) => state.tests[0]);

   console.log("%cComponent: TestDetails", "color:red", "testObject: ", test);

   // Check if the showButton prop is true.
   console.log("Showbutton prop: ", showButton)
   let inputStyle;
   showButton ? inputStyle = {display: "none"} : inputStyle = {display: "flex"}; // Hide the buttons if showButton is false.


   // This if conditional is a hotfix for the app crashing. At test is initially undefined at runtime and when the component renders, the app crashes.
   // With this conditional, the app rerenders successfully and does not access the undefined variable through dot operators.
   if (!test) {
      return (
         <div className="center-container">
            <CircularProgress />
         </div>
      );
   } else {
      return (
         <div>
            <Card>
               <CardContent sx={{ justifyContent: "center" }}>
                  <p className="taking-test-title">
                     {test.title}
                     {/* testtitle */}
                  </p>
               </CardContent>
               <Divider />
               <div className="taking-test-description-container">
                  <Typography className="taking-test-description" variant="body1" display="inline">
                     Exam Instructions:
                  </Typography>
                  <Typography className="taking-test-description-text" variant="body2" display="inline">
                     {` ${test.description}`}
                     {/* testdescription */}
                  </Typography>
               </div>
               <div className="creator-question-length-container">
                  <Typography className="taking-test-creator" variant="body2" color="textSecondary" gutterBottom sx={{ display: "inline-flex" }}>
                     Made By: {test.creator}
                     {/* testcreator */}
                  </Typography>
                  <Typography className="taking-test-questions-length" align="right" variant="subtitle1" gutterBottom sx={{ display: "inline-flex" }}>
                     Questions: {test.questions.length}
                  </Typography>
               </div>
               {/* style={{display: }} */}
               <div className="test-details-button-container" style={inputStyle} >
                  <ModalsButton color="primary" text="Autograde" />
                  <ModalsButton color="secondary" text="Publish"/>
               </div>

            </Card>
         </div>
      );
   }
};

export default TestDetails;
