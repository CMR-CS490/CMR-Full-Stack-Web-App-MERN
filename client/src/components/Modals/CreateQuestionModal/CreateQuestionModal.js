import React, {useState}from "react";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// CSS
import "./CreateQuestionModal.css";

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

const CreateTestModal = (questionCheck) => {


   // States for Modal opening and closing.
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
  

   //input fields
   const [topic, setTopic] = useState();
   const [question, setQuestion] = useState();
   const [difficulty, setDifficulty] = useState();
   const [functionName, setFunctionName ] = useState();
   const handleClose = () => {
      setTopic("")
      setQuestion("")
      setDifficulty("")
      setFunctionName("")
      setOpen(false)
   };
   const handleSubmit = (e) => {
      e.preventDefault();
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
            
               <div className="create-test-container">
                  <div className="test-modal-questions-container">
                     <div>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                              Topic
                         </Typography>
                        <br></br>
                        <input type="text" required value={topic} onChange={(e) => setTopic(e.target.value)}/>
                     </div>
                     <div className="question">
                        <Typography variant="h5" sx={{ mt: 2 }}>
                              Question
                         </Typography>
                        <br></br>
                        <textarea type="text" cols="40" rows="5" required value={question} onChange={(e) => setQuestion(e.target.value)}/>
                     </div>
                     <div>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                              Difficulty
                         </Typography>
                        <br></br>
                        <select
                                defaultValue={difficulty}
                                onChange = {(e) => setDifficulty(e.target.value)}
                                className="browser-default custom-select">
                                <option selected value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                     </div>
                     <div>
                         <Typography variant="h5" sx={{ mt: 2 }}>
                              Function Name
                         </Typography>
                        <br></br>
                        <input type="text" required value={functionName} onChange={(e) => setFunctionName(e.target.value)}/>
                     </div>

                      <Typography variant="h5" sx={{ mt: 2 }}>
                              Test Cases
                      </Typography> 
                  </div>
                
                  <br></br>
                  <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth
                        sx={{
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
            </Box>
         </Modal>
      </div>
   );
};

export default CreateTestModal;
