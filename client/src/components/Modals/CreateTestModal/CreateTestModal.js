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
   console.log("%cComponent CreateTestModal", "color:red;", "questionCheck: ", questionCheck);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuestions());
   }, [dispatch]);

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
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createTest(testData, questionData));
      handleClose();
   };

   return (
      <div>
         <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            sx={{
               marginBottom: "10px",
            }}
            onClick={handleOpen}
         >
            Create a Test
         </Button>
         <Modal open={open}>
            <Box sx={style}>
               <Typography variant="h3" component="h2">
                  Creating a Test
               </Typography>
               <TestForm currentId={currentId} setCurrentId={setCurrentId} testData={testData} setTestData={setTestData} questionCheck={questionCheck} />
               <Typography variant="h5" sx={{ mt: 2 }}>
                  Questions to be added.
               </Typography>
               <div className="test-modal-questions-container">
                  <QuestionsToBeAdded questionData={questionData} setQuestionData={setQuestionData} questionCheck={questionCheck}  />
               </div>
               <div className="create-test-container">
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
                     Create a Test
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
