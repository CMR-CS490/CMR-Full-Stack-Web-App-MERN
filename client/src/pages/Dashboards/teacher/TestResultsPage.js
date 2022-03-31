import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { getAnswer } from "./../../../actions/answers";
import { getAnswerStudent } from "./../../../actions/answers";
import { getTest } from "./../../../actions/tests";
import { getScores } from "./../../../actions/scores";
import { updateScore } from "./../../../actions/scores"

// Components
import TestDetails from "./../../../components/TakingTest/TestDetails/TestDetails";
import ReadingTestAnswers from "./../../../components/ReadingTest/ReadtingTestAnswers/ReadingTestAnswers";
import ModalsButton from "../../../components/Modals/ModalsButton";

// CSS
import "./TestResultsPage";

const TestResultsPage = ({ propsTestID, answerID }) => {
   const dispatch = useDispatch();

   const [scoreObject, setScoreObject ] = useState({})
   
   const onClickCancel = (e) => {
      window.history.back()
   }
   // const [scoreObject, setScoreObject] = useState({})


   const submitScores = () => {
      // When the user clicks Update at the bottom of Test Results page, all the updated comments are posted to the API.
      console.log("%cUpdate: score", "student", propsTestID, scoreObject )
      updateScore("student" ,propsTestID, scoreObject)
   }


   console.log("answerID: ", answerID);
   useEffect(() => {
      if (localStorage.getItem("role") === "teacher") {
         // Teacher
         dispatch(getAnswer(answerID));
         dispatch(getTest(localStorage.getItem("selectedTestID")));
         dispatch(getScores(localStorage.getItem("selectedUser"), localStorage.getItem("selectedTestID")));
      } else {
         // Student
         dispatch(getAnswerStudent(localStorage.getItem('username'), propsTestID));
         dispatch(getTest(propsTestID));
         dispatch(getScores(localStorage.getItem('username'), propsTestID));
      }
   }, [dispatch]);

   const scores = useSelector((state) => state.scores);
   const answers = useSelector((state) => state.answers);
   // dispatch(getScores(username, testID));
   if(answers.length == 0) return (<p>Please take the test first</p>)
   if(scores.length == 0) {
      return ( <p>There are currently no scores for this test.</p>)
   }
   if(localStorage.getItem("role") === "student" && !scores[0].isPublished) {
      return ( <p>Scores aren't published for this test.</p>) 
   }
   return (
      <div>
         <TestDetails showButton={true} />
         <br />
         {/* Renders the Student's test answer AND their score table output.*/}
         <ReadingTestAnswers />
         {/*{localStorage.getItem("role") === "teacher" ? <ModalsButton color='primary' text='Update' action={submitScores} /> : <></>} */}
         <ModalsButton color='primary' text='Cancel' action={onClickCancel} />
      </div>
   );
};

export default TestResultsPage;
