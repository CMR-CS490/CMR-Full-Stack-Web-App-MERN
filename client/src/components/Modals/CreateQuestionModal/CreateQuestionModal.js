import React, {useState}from "react";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useDispatch, useSelector} from 'react-redux'
// CSS
import "./CreateQuestionModal.css";
import { createQuestion } from "../../../actions/questions";
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
};

// questionCheck is an Array of questions ID's to be displayed. These are the questions to be inserted into this new test.

const CreateQuestionModal = () => {


   // States for Modal opening and closing.
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
  
   const dispatch = useDispatch();
   //input fields

   const [questionData, setQuestionData] = useState ({
		topic: '', question: '', difficulty: '', functionName: '', testcases: [{input: '', output: ''}]
	})

   const clearForm = () => {
      setQuestionData({topic: '', question: '', difficulty: '', testcases: {} , functionName: ''})
   }
   const handleClose = () => {
      clearForm();
      setOpen(false)
   };
   const handleSubmit = (e) => {
     console.log(questionData);
   
     if(questionData.topic.length == 0 || questionData.question.length == 0 || questionData.difficulty.length == 0 
      || questionData.functionName.length == 0) {
         document.getElementsByClassName("error")[0].innerHTML = "Please fill out all fields";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;
      }
      document.getElementsByClassName("error")[0].style.display = "none";
      dispatch(createQuestion(questionData));
      clearForm();
      setOpen(false)
   };

   return (
      <div>
         <Button
               variant="contained"
               color="secondary"
               size="large"
               type="submit"
               fullWidth
               sx={{
                  marginBottom: "10px",
               }}
               onClick={handleOpen}
            >
               Create a Question
            </Button>
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
                     <div>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                              Difficulty
                         </Typography>
                        <br></br>
                        <select
                                defaultValue={questionData.difficulty}
                                onChange = {(e) => setQuestionData({...questionData, difficulty: e.target.value})}
                                className="browser-default custom-select">
                                <option value="">-</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                     </div>
                     <div>
                         <Typography variant="h5" sx={{ mt: 2 }}>
                              Function Name
                         </Typography>
                        <br></br>
                        <input type="text" required value={questionData.functionName} onChange={(e) => setQuestionData({...questionData, functionName: e.target.value})}/>
                     </div>

                     <div>
                         <Typography variant="h5" sx={{ mt: 2 }}>
                              Test Case 1
                         </Typography>
                         <div className= "test-case" value={questionData.testCase}>
                           <span className= "input">
                                 Input:
                                 <input type="text" value={questionData.testCase}></input>
                           </span>
                   
                           <span className="output">
                                 Output: 
                                 <input type="text"></input>
                           </span>  
                         </div>
                        <br></br>
                        
                       
                     </div>
                     <div className="buttons">
                        <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              type="submit"
                              fullWidth
                              sx={{
                                 marginTop: "10px",
                                 marginBottom: "10px",
                              }}
                              onClick={handleSubmit}
                           >
                              Create
                           </Button>

                        <Button
                           variant="contained"
                           color="secondary"
                           size="large"
                           type="submit"
                           fullWidth
                           sx={{
                              marginBottom: "10px",
                           }}
                           onClick={handleClose}
                        >
                           Close
                        </Button>
                     </div>
                    

                  </div>

                  
                
                 
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default CreateQuestionModal;
