import mongoose from 'mongoose';

import Question from "../models/question.js";
import Test from "../models/test.js";
import Answer from "../models/answer.js";

import fs from "fs"
import { PythonShell } from "python-shell";

const runTestCase = async (content) => {
    fs.writeFileSync('./function.py', content)

    return new Promise((resolve, reject) => {
        PythonShell.run("function.py", null, function(err, results){
            if(err) {
                return reject(err)
            }

            return resolve(results)
        })
    })
}

export const gradeTest = async (req, res) => {
   try {
      const { id: testID } = req.params;
      // Get all of the tests/exams in the DB.
      console.log("testID", testID);

      // console.log("Sending question with id: ", questionID , ":", {question});
      const content = "def SUB (num1, num2):\n\treturn num1 - num2\nprint(SUB(5,1))"
      const output = await runTestCase(content);
      console.log("OUTPUT: ", output);
     
      
      
      // Send an array of all the tests.
      res.status(200);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};





 // const answers = await Answer.find({test_id: testID});
      // answers.map(answer => {
      //    let questions = answer.questions;
      //    questions.map(question => {
      //      let questionData = await  Question.find({_id: question.question_id}); 
      //    })
      // });