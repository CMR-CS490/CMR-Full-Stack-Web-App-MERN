import React, { useState } from "react";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useDispatch, useSelector} from 'react-redux'
// CSS
import "./CreateQuestionModal.css";
import { createQuestion } from "../../../actions/questions";

import ModalsButton from "../ModalsButton.js";

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
   height: "80%",
};

// questionCheck is an Array of questions ID's to be displayed. These are the questions to be inserted into this new test.

const CreateQuestionModal = () => {
   // States for Modal opening and closing.
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);

  
   const dispatch = useDispatch();
   //input fields

   const [questionData, setQuestionData] = useState ({
		topic: '', question: '', difficulty: '', functionName: '', testcases: []
	})

   const [testcases, setTestcases] = useState ([])
   const [testcase, setTestcase] = useState({input: '', output: ''})

   const clearForm = () => {
      setQuestionData({topic: '', question: '', difficulty: '', functionName: ''})
      setTestcases([]);
      setTestcase({input: "", output: ""});
   }
   const handleClose = () => {
      clearForm();
      setOpen(false);
   };

   const addTestCase = () => {
      //console.log("Input: %s, Output: %s", testcase.input, testcase.output);
      setTestcases([...testcases, testcase]);
      setTestcase({input: "", output: ""});

   };

   const handleSubmit = (e) => {

   
     if(questionData.topic.length == 0 || questionData.question.length == 0 || questionData.difficulty.length == 0 
      || questionData.functionName.length == 0) {
         document.getElementsByClassName("error")[0].innerHTML = "Please fill out all fields";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;
      }

      if (testcases.length < 2) {
         document.getElementsByClassName("error")[0].innerHTML = "Please provide atleast 2 testcases";
         document.getElementsByClassName("error")[0].style.display = "block";
         return; 
      }
      document.getElementsByClassName("error")[0].style.display = "none";
      dispatch(createQuestion(questionData, testcases));
      clearForm();
      setOpen(false)

   };

   return (
      <div>

         <ModalsButton color="secondary" action={handleOpen} text="Create Question"></ModalsButton>
        
         <Modal open={open}>
            <Box sx={style}>
               <Typography variant="h3" component="h2">
                  Creating a Question
               </Typography>

               <div className="error">
                  <h3>Error</h3>
               </div>

               <div className="create-question-container">
                  <div className="questions-modal-container">
                     <div>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                           Topic
                        </Typography>
                        <br></br>

                        <input type="text"required value={questionData.topic} onChange={(e) => setQuestionData({ ...questionData, topic: e.target.value })}/>

                     </div>
                     <div className="question">
                        <Typography variant="h5" sx={{ mt: 2 }}>
                           Question
                        </Typography>
                        <br></br>

                        <textarea required type="text" cols="40" rows="5" required value={questionData.question} onChange={(e) => setQuestionData({...questionData, question: e.target.value})}/>

                     </div>
                     <div className="difficulty">
                        <Typography variant="h5" sx={{ mt: 2 }}>
                           Difficulty
                        </Typography>
                        <br></br>

                        <select
                                defaultValue={questionData.difficulty}
                                onChange = {(e) => setQuestionData({...questionData, difficulty: e.target.value})}
                                className="browser-default custom-select">
                                <option value="">-</option>
                                <option class='easy' value="Easy">Easy</option>
                                <option class="medium" value="Medium">Medium</option>
                                <option class="hard" value="Hard">Hard</option>
                            </select>
                     </div>
                     <div className="functionName">
                         <Typography variant="h5" sx={{ mt: 2 }}>
                              Function Name
                         </Typography>
                        <br></br>
                        <input type="text" required value={questionData.functionName} onChange={(e) => setQuestionData({...questionData, functionName: e.target.value})}/>
                     </div>

                     <div className="test-case">
                         <Typography variant="h5" sx={{ mt: 2 }}>
                              Test Cases
                         </Typography>
                         <div>
                           <span className= "input">
                                 Input:
                                 <input type="text" value={testcase.input} onChange={(e) => setTestcase({...testcase, input: e.target.value})}></input>
                           </span>
                     
                           <span className="output">
                                 Output: 
                                 <input type="text" value={testcase.output} onChange={(e) => setTestcase({...testcase, output: e.target.value})}></input>
                           </span>
                         </div>
                     
                     </div>
                     <div className="test-case-action">
                        <button onClick={addTestCase}>Add Test Case</button>
                        <>
                           {testcases.map((testcase) => (
                              <h4>Input: {testcase.input} Output: {testcase.output}</h4>
                           ))}

                        </>
                     </div>

                     <div className="buttons">
                        <ModalsButton color="primary" action={handleSubmit} text="Create"></ModalsButton>
                        <ModalsButton color="secondary" action={handleClose} text="Cancel"></ModalsButton>
                     </div>
                  </div>             
               
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default CreateQuestionModal;
