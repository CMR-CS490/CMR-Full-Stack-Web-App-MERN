import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { getAnswer } from "./../../../actions/answers";
import { getAnswerStudent } from "./../../../actions/answers";
import { getTest } from "./../../../actions/tests";
import { getScores } from "./../../../actions/scores";

// Components
import TestDetails from "./../../../components/TakingTest/TestDetails/TestDetails";
import ReadingTestAnswers from "./../../../components/ReadingTest/ReadtingTestAnswers/ReadingTestAnswers";
import ScoreTables from "../../../components/ReadingTest/ScoreTables/ScoreTables";

// CSS
import "./TestResultsPage";

const TestResultsPage = ({ propsTestID, answerID }) => {
   const dispatch = useDispatch();

   // const [username, setUserName] = useState();
   // // FOR STUDENTS. Their username is be pulled from local storage.
   // if (localStorage.getItem("role") === "student") {
   //    // Get the username from local storage.
   //    setUserName(localStorage.getItem("username"))
   // } else {
   //    // FOR TEACHERS. They will be viewing these tests with the username being PASSED as a xxx?
   //    setUserName("student")
   // }

   // const [username, setUserName] = useState(localStorage.getItem("username")); // Get the username from local storage.
   // const [username, setUserName] = useState("student"); // HARDCODED USERNAME.
   // const [stateAnswerID, setstateAnswerID] = useState(answerID); // Get the answerID from the prop.
   // const [testID, setTestID] = useState(null); // Get the testID from answerID's redux store.

   // ALL VALUES ARE HARDCODED. (Needs to be passed to this prop in a better way.)
   const [username, setUserName] = useState("student"); // HARDCODED USERNAME.
   const [stateAnswerID, setstateAnswerID] = useState(answerID); // Get the answerID from the prop.
   const [testID, setTestID] = useState("621198B552B9AA594FC29C52"); // Get the testID from answerID's redux store.

   useEffect(() => {
      if (localStorage.getItem("role") === "teacher") {
         // Teacher
         dispatch(getAnswer(stateAnswerID));
         dispatch(getTest(testID));
         dispatch(getScores(username, testID));
      } else {
         // Student
         dispatch(getAnswerStudent(username, testID));
         dispatch(getTest(testID));
         dispatch(getScores(username, testID));
      }
   }, [dispatch]);

   const answers = useSelector((state) => state.answers);

   // dispatch(getScores(username, testID));

   return (
      <div>
         <TestDetails showButton={true} />
         <br />
         {/* Renders the Student's test answer AND their score table output.*/}
         <ReadingTestAnswers />
         {/* <ScoreTables /> */}
      </div>
   );
};

export default TestResultsPage;

// console.log("answerID: ", answerID);
// // Get the answer from the DB.

// useEffect(() => {
//    if (testID == "empty") {
//       console.log("Populating testID")
//       if (answers.length) {  // This if statement prevents the app from crashing. (Prevents the dot operator from accessing answers when it)
//          setTestID(answers[0].test_id);
//          dispatch(getTest(testID));
//       }
//    }
//    dispatch(getAnswer(answerID));
//    console.log("From TestResultPage, requesting username: ", username, " and test_id: ", testID);
//    dispatch(getScores(username, testID));
// if (answers.length) {
//    // This if statement prevents the app from crashing.
//    setTestID(answers[0].test_id);
//    // console.log("Answers.test_id: ", test_id);
//    dispatch(getTest(testID));
// }
// }, [dispatch]);

// // console.log("Answers: ", answers);

// // let username = localStorage.getItem("username");
// // console.log({username})

// // These variables are derived from the answers variable that we pulled from our redux store. (test_id)

// // if (username && test_id) {
// //    console.log("From TestResultPage, requesting username: ", username, " and test_id: ", test_id)
// // //    dispatch(getScores(username, test_id));
// // }

// // // After we got the answer, get the test Details.
// // if (answers) {
// //    console.log("Getting Test");
// //    dispatch(getTest(test_id));
// // }
