import React from "react";
import {CircularProgress} from '@mui/material';

// Components
import TakingTestQuestion from '../TakingTestQuestions/TakingTestQuestions'

//Redux Store
import {useSelector} from 'react-redux';

const TakingTestQuestions = () => {
   // Reducer
   const questions = useSelector((state) => state.questions);

   return (
      <div>
         {/* <button onClick={console.log("Questions Props: ", {questionCheck}, {setQuestionCheck})}>
   test
</button> */}
         {!questions.length ? (
            // false
            <CircularProgress />
         ) : (
            // true
            questions.map((question) => (
               <TakingTestQuestion key={question._id} question={question} />
            ))
         )}
      </div>
   );
};

export default TakingTestQuestions;
