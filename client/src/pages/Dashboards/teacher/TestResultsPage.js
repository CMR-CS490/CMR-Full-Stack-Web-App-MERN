import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { getAnswer } from "./../../../actions/answers";
import { getTest } from "./../../../actions/tests";

// Components
import TestDetails from "./../../../components/TakingTest/TestDetails/TestDetails"
import ReadingTestAnswers from "./../../../components/ReadingTest/ReadtingTestAnswers/ReadingTestAnswers"

// CSS
import "./TestResultsPage";

// This variable makes it so the fields are able to be editable.
let isEditible = true; // True if the role is a teacher, false if its a student.

const columns = [
   { field: "id", headerName: "ID", width: 90, hide: true, GridColDef: false },
   {
      field: "questionNumber",
      headerName: "Question Number",
      flex: 0.2,
      editable: false,
      sortable: false,
   },
   {
      field: "questionDescription",
      headerName: "Question Description",
      flex: 1,
      editable: isEditible,
      sortable: false,
   },
   {
      field: "score",
      headerName: "Score",
      type: "number",
      flex: 0.2,
      editable: isEditible,
      sortable: false,
   },
];

// The first and and last rows will always be (Function Name) and (Comments/Total Score)
// The middle columns will be based on the number of test cases.
const rows = [
   { id: 1, questionNumber: "Function Name", questionDescription: "The function name is correct.", score: 50 },
   { id: 2, questionNumber: "Test Case 1", questionDescription: "Testing(2, 3)", score: 25 },
   { id: 3, questionNumber: "Test Case 2", questionDescription: "Testing(3, 3)", score: 25 },
   { id: 4, questionNumber: "Comments", questionDescription: "Write comments here", score: "Total" },
];

const TestResultsPage = ({ answerID }) => {
   console.log("answerID: ", answerID);

   // Get the answer from the DB.
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAnswer(answerID));
   }, [dispatch]);

   const answers = useSelector((state) => state.answers);

   console.log("Answers: ", answers);

   // These variables are derived from the answers variable that we pulled from our redux store. (test_id)
   let test_id;
   if (answers.length) { // This if statement prevents the app from crashing.
      test_id = answers[0].test_id;
      console.log("Answers.test_id: ", test_id);
      dispatch(getTest(test_id));
   }


   // // After we got the answer, get the test Details.
   // if (answers) {
   //    console.log("Getting Test");
   //    dispatch(getTest(test_id));
   // }

   return (
      <div>

         <TestDetails />
         <br />
         <ReadingTestAnswers />




         <div style={{ height: "400px", width: "100%" }}>
            <DataGrid
               rows={rows}
               columns={columns}
               pageSize={5}
               rowsPerPageOptions={[5]}
               // checkboxSelection
               disableSelectionOnClick
               sx={{
                  bgcolor: "white",
                  boxShadow: 2,
                  border: 1,
               }}
            />
         </div>
      </div>
   );
};

export default TestResultsPage;
