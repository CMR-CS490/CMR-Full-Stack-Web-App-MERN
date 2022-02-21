import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import Test from "./Test/Test";

import "./Tests.css";

const Tests = () => {
   const tests = useSelector((state) => state.tests); // tests are from /reducers/index.js

   console.log(tests);

   return !tests.length ? (
      <CircularProgress /> // If there are no tests in the DB, return a circular loading screen.)
   ) : (
      <Grid container alignItems="stretch" spacing={3}>
         {tests.map((test) => (
            <Grid key={test._id} item xs={12} sm={6}>
               <Test test={test} />
            </Grid>
         ))}
      </Grid>
   );
};

export default Tests;
