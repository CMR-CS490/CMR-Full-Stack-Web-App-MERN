import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAmswers, getAnswers } from "../../../actions/answers";
// Components
// MUI
import { Button } from "@mui/material";
//CSS
import "./QuestionsPage.css";

const TestDetailsPage = ({testID}) => {

   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getAnswers(testID));
   }, [dispatch]);

   

   // State for keep track of the selected checkboxed questions.
   const [questionCheck, setQuestionCheck] = useState([]);

   // // States for popup modals.
   // const [displayTestModal, setDisplayTestModal] = useState({visible: false})
   // const [displayQuestionModal, setDisplayQuestionModal] = useState({visible: false})

   return (
      <div className="test-details">
         <h1> LOADED </h1>
      </div>
   );
};

export default TestDetailsPage;
