import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../../actions/questions";
// Components
import Questions from "../../../components/Questions/Questions";
import CreateTestModal from "../../../components/Modals/CreateTestModal/CreateTestModal";
import CreateQuestionModal from "../../../components/Modals/CreateQuestionModal/CreateQuestionModal";
// MUI
import { Button } from "@mui/material";
//CSS
import "./QuestionsPage.css";

const QuestionsPage = () => {

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuestions());
   }, [dispatch]);

   

   // State for keep track of the selected checkboxed questions.
   const [questionCheck, setQuestionCheck] = useState([]);

   // // States for popup modals.
   // const [displayTestModal, setDisplayTestModal] = useState({visible: false})
   // const [displayQuestionModal, setDisplayQuestionModal] = useState({visible: false})

   return (
      <div className="button-questions-container">
         <div className="button-container">
            {/* prop quectionCheck is an array of id's of the selected questions to be added to the Test. */}
            <CreateTestModal questionCheck={questionCheck} /> 
            <CreateQuestionModal questionCheck={questionCheck} />
         </div>
         <div className="questions-container">
            <Questions questionCheck={questionCheck} setQuestionCheck={setQuestionCheck}/>
         </div>
      </div>
   );
};

export default QuestionsPage;
