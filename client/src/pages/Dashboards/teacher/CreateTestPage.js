import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getQuestions } from "../../../actions/questions";
// Components
import TestForm from "../../../components/TestForm/TestForm"
import QuestionsTable from "../../../components/QuestionsTable/QuestionsTable";
import ModalsButton from "../../../components/Modals/ModalsButton";
import QuestionFilter from "../../../components/QuestionFilter/QuestionFilter";

//Request
import {createTest} from "../../../actions/tests"
import { Grid, Paper} from '@mui/material';
//CSS
import "./CreateTestPage.css";

const CreateTestPage = () => {

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuestions());
      

   }, [dispatch]);

   var r = document.querySelector('.MuiContainer-root');
   if(r)
      r.style.setProperty('min-width', "100%"); 

   //Test Data
   const [testData, setTestData] = useState({
      creator: "",
      title: "",
      description: "", 
      selectedFile: "",
      questions:[],
      visible: false
   });

   const [questionData, setQuestionData] = useState([]);

   // State for keep track of the selected checkboxed questions.
   const [questionCheck, setQuestionCheck] = useState([]);

   // State to hold the question filter parameters. Keyword is a string in the question description.
   const [filterData, setFilterData] = useState({
      topic: "",
      keyword: "",
      difficulty: "",
   })

   // State to hold the question's to be filtered. If the question ID is in the filter array, the question will not be shown. Otherwise, it will be shown.
   // const [filterQuestionByIDs, setFilterQuestionByIDs] = useState({
   //    shownQuestionIds: [],
   //    unshownQuestionIds: [],
   // });
  
   const questions = useSelector((state) => state.questions); 
   const handleSelection = (selected) => {
      let temp = []
      let temp2 = []
      setTestData({...testData, questions: selected})

      selected.forEach((questionID) => {
         temp.push (questions.filter((question) => question._id == questionID)[0])
         if(questionData.length > 0)
            temp2.push (questionData.filter((question) => question.question_id == questionID)[0])
      })
      setQuestionCheck(temp);
      setQuestionData(temp2)
   }

   if(questions.length <= 0) {
      return (<></>)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // console.log("TEST DATA", testData)
      // console.log("QUESTION DATA", questionData)


      if(testData.creator.length === 0 || testData.title.length === 0 || testData.description.length === 0 ) {
         document.getElementsByClassName("error")[0].innerHTML = "Please fill out all fields";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;
      }

      let question_score_error = false;
      let total = 0;
      questionData.map( (question)=> {
         if(question.question_score.length=== 0 || question.question_score === '') {
            question_score_error = true;    
         }
         total += parseInt(question.question_score);
      });

      // Score Validation checking.
      if(question_score_error) {
         document.getElementsByClassName("error")[0].innerHTML = "Please fill out scores for each question";
         document.getElementsByClassName("error")[0].style.display = "block";
         return; 
      }
      // console.log("TOTAL: ", total)

      if(total != 100) {
         
         document.getElementsByClassName("error")[0].innerHTML = "Please make sure all scores equal to 100";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;  
      }

      document.getElementsByClassName("error")[0].style.display = "none";

      dispatch(createTest(testData, questionData));

      setTimeout(function() {
         window.location.reload();
      }, 1000)

   }

    

   return (
	// <div className="float-container">

	// 	<div className="float-child">
			
	// 	</div>
   <div>
      <TestForm testData={testData} setTestData={setTestData}/>
      <QuestionFilter setFilterData={setFilterData}/>
      
      <Paper
      
         elevation={8}
         variant="outlined"
         sx={{
            padding: 1,
         }}
      >
         
         <h3 className="error">Error</h3>
         
         <Grid container spacing={2}>
            {/* <QuestionsTable filterQuestionByIDs={filterQuestionByIDs} setFilterQuestionByIDs={setFilterQuestionByIDs} filterData={filterData} questions = {questions} isSelectTable={true} handleSelect={handleSelection}></QuestionsTable> */}
            <QuestionsTable filterData={filterData} questions = {questions} isSelectTable={true} handleSelect={handleSelection}></QuestionsTable>
            <QuestionsTable questions = {questionCheck}  isSelectTable={false} isScoreTable={true} questionData={questionData} setQuestionData={setQuestionData}></QuestionsTable>
         </Grid>

      </Paper>
    
     
      
      <ModalsButton text="Create a Test" action={handleSubmit} color="primary"></ModalsButton>
   </div>
 
  
   );
};

export default CreateTestPage;