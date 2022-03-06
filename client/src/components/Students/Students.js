import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

// Components
import Student from "./Student/Student";

const Students = () => {
   return (
      <Grid container alignItems="stretch" spacing={1}>
         <Grid item xs={12} sm={4}>
            <Student />
         </Grid>
         <Grid item xs={12} sm={4}>
            <Student />
         </Grid>
         <Grid item xs={12} sm={4}>
            <Student />
         </Grid>
         <Grid item xs={12} sm={4}>
            <Student />
         </Grid>
         <Grid item xs={12} sm={4}>
            <Student />
         </Grid>
         <Grid item xs={12} sm={4}>
            <Student />
         </Grid>
      </Grid>
   );
};

export default Students;
