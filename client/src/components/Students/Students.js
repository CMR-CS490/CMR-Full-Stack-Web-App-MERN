import React from "react";
import { useSelector } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// Components
import Student from "./Student/Student";

const Students = ({ buttonName1, onButtonClick1 }) => {
    
   // Get answer data from Redux Store.
   const answers = useSelector((state) => state.answers);

   return (
      <Grid container alignItems="stretch" spacing={1}>
         {answers.map((answer) => (
            <Grid key={answer._id} item xs={12} sm={4}>
               <Student answer={answer} buttonName1={buttonName1} onButtonClick1={onButtonClick1} />
            </Grid>
         ))}
      </Grid>
   );
};

export default Students;
