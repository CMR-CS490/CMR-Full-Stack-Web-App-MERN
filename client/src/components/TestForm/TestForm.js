import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
// import { alpha, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createTest, updateTest } from "../../actions/tests";

import "./TestForm.css";

const theme = {};

// Get the current ID

const TestForm = ({ currentId, setCurrentId, testData, setTestData}) => {
   // // States
   // const [testData, setTestData] = useState({
   //    creator: "",
   //    title: "",
   //    message: "",
   //    description: "",
   //    selectedFile: "",
   // });

   // const test = useSelector((state) => (currentId ? state.tests.find((t) => t._id === currentId) : null)); // Return one test with the matching id.

   // const dispatch = useDispatch();

   // useEffect(() => {
   //    if (test) setTestData(test);
   // }, [test]);

   // const handleSubmit = (e) => {
   //    e.preventDefault();

   //    // Updating a test with a ID.
   //    if (currentId) {
   //       dispatch(updateTest(currentId, testData));
   //    } else {
   //       // Creaing a test.
   //       dispatch(createTest(testData));
   //    }
   //    clear();
   // };

   return (
      <Paper
         elevation={8}
         variant="outlined"
         sx={{
            padding: 2,
         }}
      >
            {/* <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Test</Typography> */}
            <TextField
               name="title"
               variant="outlined"
               label="Title"
               
               // value={testData.title}
               onChange={(e) => setTestData({ ...testData, title: e.target.value })}
               // className="textfield-title"
               sx={{
                     width: "25%",
                     margin: "10px 0",
               }}
            />
            <TextField
               name="creator"
               variant="outlined"
               label="Creator"
               
               // value={testData.creator}
               onChange={(e) => setTestData({ ...testData, creator: e.target.value })}
               // className="textfield-creator"
               sx={{
                     width: "25%",
                     margin: "10px 0",
               }}
            />
            <TextField
               name="description"
               variant="outlined"
               label="Description"
               
               // value={testData.description}
               onChange={(e) => setTestData({ ...testData, description: e.target.value })}
               // className="textfield-description"
               sx={{
                     width: "50%",
                     margin: "10px 0",
               }}
            />
            <div>
               <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setTestData({ ...testData, selectedFile: base64 })}
                  sx={{
                     width: "97%",
                     margin: "10px 0",
                  }}
               />
            </div>
      </Paper>
   );
};

export default TestForm;
