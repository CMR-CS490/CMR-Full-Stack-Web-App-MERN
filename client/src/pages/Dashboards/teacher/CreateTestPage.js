import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getQuestions } from "../../../actions/questions";
// Components
import Questions from "../../../components/Questions/Questions";
import CreateTestModal from "../../../components/Modals/CreateQuestionModal/CreateQuestionModal";
import CreateQuestionModal from "../../../components/Modals/CreateQuestionModal/CreateQuestionModal";
import QuestionsTable from "../../../components/QuestionsTable/QuestionsTable";
// MUI
import { DataGrid } from "@mui/x-data-grid";
//CSS
import "./CreateTestPage.css";

const QuestionsPage = () => {

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuestions());
   }, [dispatch]);

   // State for keep track of the selected checkboxed questions.
   const [questionCheck, setQuestionCheck] = useState([]);
  
   const questions = useSelector((state) => state.questions); 
   const handleSelection = (selected) => {
      let temp = []
      
      selected.forEach((questionID) => {
         temp.push (questions.filter((question) => question._id == questionID)[0])
      })
      setQuestionCheck(temp);      
   }

   if(questions.length <= 0) {
      return (<></>)
   }

    

   return (
	// <div className="float-container">

	// 	<div className="float-child">
			
	// 	</div>
   <div>
      <QuestionsTable questions = {questions} isSelectTable={true} handleSelect={handleSelection}></QuestionsTable>
      <QuestionsTable questions = {questionCheck}  isSelectTable={false} ></QuestionsTable>
   </div>
 
  
   );
};

export default QuestionsPage;