import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getQuestions } from "../../../actions/questions";
// Components
import QuestionsTable from "../../../components/QuestionsTable/QuestionsTable";
import CreateQuestion from "../../../components/CreateQuestion/CreateQuestion"
//Request
import {createTest} from "../../../actions/tests"
import { Grid, Paper} from '@mui/material';
//CSS
import "./CreateQuestionPage.css";

const QuestionsPage = () => {

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuestions());
      

   }, [dispatch]);

   var r = document.querySelector('.MuiContainer-root');
   if(r) {
      r.style.setProperty('min-width', "100%"); 
      r.style.setProperty('padding-right', '0px');
   }
      

   const questions = useSelector((state) => state.questions); 

   return (

         <Grid container spacing={2} className="split-container">
            <Grid  className= "create-question-form" sx={{
               boxShadow: 2,
               borderRadius:2,
               border: 1,
               height: "600px", 
               width: "50%",
               margin: "10px",
               backgroundColor: "white",
               marginLeft: "20px"

            }}
            >
               <CreateQuestion></CreateQuestion>
            </Grid>
            <QuestionsTable questions = {questions} isSelectTable={false}></QuestionsTable>
         </Grid>
  
   );
};

export default QuestionsPage;