import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import Test from "./Test/Test";

import "./Tests.css";

const Tests = ({onButtonClick1, onButtonClick2, buttonName1, buttonName2 }) => {
   const tests = useSelector((state) => state.tests); // tests are from /reducers/index.js

   // console.log(tests);

   return !tests.length ? (
      <CircularProgress /> // If there are no tests in the DB, return a circular loading screen.)
   ) : (
      <Grid container alignItems="stretch" spacing={1}>
         {tests.map((test) => (
            <Grid key={test._id} item xs={12} sm={4}>
               <Test test={test} buttonName1={buttonName1} buttonName2={buttonName2} onButtonClick1={onButtonClick1} onButtonClick2={onButtonClick2} />
            </Grid>
         ))}
      </Grid>
   );
};

export default Tests;
