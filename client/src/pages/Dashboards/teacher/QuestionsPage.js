import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Components
import Questions from "../../../components/Questions/Questions";
import CreateTestModal from "../../../components/Modals/CreateTestModal/CreateTestModal";
// MUI
import { Button } from "@mui/material";
import { getQuestions } from "../../../actions/questions";
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
            <CreateTestModal />
            {/* <Button
               variant="contained"
               color="primary"
               size="large"
               type="submit"
               fullWidth
               sx={{
                  marginBottom: "10px",
               }}
               onClick={() => {
                  setDisplayTestModal({visible: true})
               }}
            >
               Create a Test
            </Button> */}
            <Button
               variant="contained"
               color="secondary"
               size="large"
               type="submit"
               fullWidth
               sx={{
                  marginBottom: "10px",
               }}
               onClick={() => {}}
            >
               Create a Question
            </Button>
         </div>
         <div className="questions-container">
            <Questions questions questionCheck={questionCheck} setQuestionCheck={setQuestionCheck}/>
         </div>
      </div>
   );
};

export default QuestionsPage;
