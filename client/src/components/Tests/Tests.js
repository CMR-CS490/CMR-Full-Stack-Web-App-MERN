import React from "react";
import { useSelector } from 'react-redux';

import Test from "./Test/Test";


const Tests = () => {
   const tests = useSelector((state) => state.tests) // tests are from /reducers/index.js

   console.log(tests);

   return (
      <>
         <h1>Tests </h1>
         <Test />
         <Test />
      </>
   );
};

export default Tests;
