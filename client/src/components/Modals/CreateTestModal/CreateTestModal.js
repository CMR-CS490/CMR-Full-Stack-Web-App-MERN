import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../../actions/questions";
import { createTest } from "../../../actions/tests";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// Components
import QuestionsToBeAdded from "../../Questions/QuestionsToBeAdded";
import TestForm from "../../TestForm/TestForm";
import ModalsButton from "../ModalsButton.js";

// CSS
import "./CreateTestModal.css";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "80%",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
   height: "80%"
};

// questionCheck is an Array of questions ID's to be displayed. These are the questions to be inserted into this new test.

const CreateTestModal = ({questionCheck}) => {
   // console.log("%cComponent CreateTestModal", "color:red;", "questionCheck: ", questionCheck);

   const dispatch = useDispatch();
  

   //  console.log("%cComponent CreateTestModal", "color:red;", "questions: ", questions)

   // States for passing the test info, question_ids, and question scores to the api.
   const [currentId, setCurrentId] = useState(null);
   const [testData, setTestData] = useState({
      creator: "",
      title: "",
      description: "",
      selectedFile: "",
      questions:[],
      visible: false
   });

   const [questionData, setQuestionData] = useState([]);

   // States for Modal opening and closing.
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => {
      if(questionCheck.length !== 0) {
         setOpen(true);
      }
      
   };
   const handleClose = () => setOpen(false);

   const handleSubmit = (e) => {
      e.preventDefault();

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
         total += question.question_score;
      });

      // Score Validation checking.
      if(question_score_error) {
         document.getElementsByClassName("error")[0].innerHTML = "Please fill out scores for each question";
         document.getElementsByClassName("error")[0].style.display = "block";
         return; 
      }

      if(total != 100) {
         document.getElementsByClassName("error")[0].innerHTML = "Please make sure all scores equal to 100";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;  
      }

      document.getElementsByClassName("error")[0].style.display = "none";

      dispatch(createTest(testData, questionData));
      handleClose();
      window.location.reload();
   };

   return (
      <div>

         <ModalsButton text="Create a Test" action={handleOpen} color="primary"></ModalsButton>
         <Modal open={open}>
            <Box sx={style}>
               <Typography variant="h3" component="h2">
                  Creating a Test
               </Typography>
               <div className="error">
                  <h3>Error</h3>
               </div>
               <TestForm currentId={currentId} setCurrentId={setCurrentId} testData={testData} setTestData={setTestData} questionCheck={questionCheck} />
               <Typography variant="h5" sx={{ mt: 2 }}>
                  Questions to be added.
               </Typography>
               <div className="test-modal-questions-container">
                  <QuestionsToBeAdded questionData={questionData} setQuestionData={setQuestionData} questionCheck={questionCheck}  />
               </div>
               <div className="create-test-container">
                  <ModalsButton text="Create a Test" action={handleSubmit} color="primary"></ModalsButton>
                  <ModalsButton text="Close" action={handleClose} color="secondary"></ModalsButton>
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default CreateTestModal;
