import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Divider, Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// CSS
import "./TestDetails.css";

const TestDetails = ({ setListOfQuestions }) => {
   const test = useSelector((state) => state.tests[0]);

   console.log("%cComponent: TestDetails", "color:red", "testObject: ", test);

   // This if conditional is a hotfix for the app crashing. At test is initially undefined at runtime and when the component renders, the app crashes.
   // With this conditional, the app rerenders successfully and does not access the undefined variable through dot operators.
   if (!test) {
      return <p>loading</p>;
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
            </Card>
         </div>
      );
   }
};

export default TestDetails;
