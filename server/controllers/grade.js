import mongoose from 'mongoose';

import Question from "../models/question.js";
import Test from "../models/test.js";
import Answer from "../models/answer.js";
import Score from "../models/scores.js";

import fs from "fs"
import { PythonShell } from "python-shell";

const runTestCase = async (content) => {
    fs.writeFileSync('./function.py', content)

    return new Promise((resolve, reject) => {
        PythonShell.run("function.py", null, function(err, results){
            if(err) {
                return resolve([]);
            }

            return resolve(results)
        })
    })
}

const gradeQuestion = async (question_id, answer, questionScore) => {
    
    let question = await Question.find({_id: question_id});
    
    let response = {};
    response.testcases = [];
    response.question_id = question_id;
    
    //check function name
    let functionName = question[0].functionName;
    let functionNameCorrect = true;
    if(answer.includes(`def ${functionName}`)) {
        response.functionNameScore = "5";
        response.updatedFunctionNameScore = "5";
    } else {
        response.functionNameScore = "0";
        response.updatedFunctionNameScore = "0";
        functionNameCorrect = false;
    }

    let totalScore = questionScore -5;

    //Check for constraints
    if(question[0].constraintName && question[0].constraintName !== 'None') {
        console.log('IN HERE')
        if(question[0].constraintName === 'Recursion') {
            if(answer.count(functionName) > 1) {
                response.constraintScore = 5;
                response.updatedConstraintScore = 5;
                response.constraintName = "Recursion";
            }
        } else if (question[0].constraintName === 'For Loop') {
            console.log('IN FOR LOOP')
            if(answer.includes('for')) {
                response.constraintScore = 5;
                response.updatedConstraintScore = 5;
                response.constraintName = "For Loop";
            }
        } else if (question[0].constraintName === 'While Loop') {
            if(answer.includes('while')) {
                response.constraintScore = 5;
                response.updatedConstraintScore = 5;
                response.constraintName = "While Loop";
            }
        } else {
            response.constraintScore = 0;
            response.updatedConstraintScore = 0; 
        }

        totalScore = totalScore - 5; 
        
    }
    
    

    
    for (let i = 0; i < question[0].testcases.length; i++) {
        response.testcases.push({});
        let testCase1 = question[0].testcases[i].input;
        let testCase1Answer = question[0].testcases[i].output;
        
   
        let endIndex = answer.indexOf('(');
        let startIndex = answer.indexOf("def") + 4;
        console.log("BEFORE", answer);
        answer = answer.replace(answer.substring(startIndex, endIndex), functionName + " ");
        console.log("ANSWER:", answer);
        
        const content =  `${answer}\nprint(${functionName}(${testCase1}))`
        let output = []
        
        output = await runTestCase(content);
        
            
        
        if(output[0] == testCase1Answer) {
            response.testcases[i].testcase = `${functionName}(${testCase1})`
            response.testcases[i].score = (totalScore/question[0].testcases.length).toFixed(2);
            response.testcases[i].teacherScore = (totalScore/question[0].testcases.length).toFixed(2);
            response.testcases[i].expectedAnswer = testCase1Answer;
            response.testcases[i].actualAnswer = output[0];
        } else {
            response.testcases[i].testcase = `${functionName}(${testCase1})`
            response.testcases[i].score = 0;
            response.testcases[i].teacherScore = 0;
            response.testcases[i].expectedAnswer = testCase1Answer;
            response.testcases[i].actualAnswer = output[0];
        }
        
        
    }
    return new Promise((resolve, reject) => {
       
        return resolve (response);
    }) 
}


export const gradeTest = async (answerID) => {

      const data = {};
      let answer = await Answer.find({_id: answerID});
      answer = answer[0];
      //Delete if previous grades exists
      await Score.findOneAndDelete({answer_id: answer.id});

      data.username = answer.username;
      data.test_id = answer.test_id;
      data.answer_id = answerID;
      data.scores = [];

      let test = await Test.find({_id: answer.test_id})
      let answers = answer.questions;

      let questionData = []
      //console.log(test[0].questions)
      for(let i = 0; i < answers.length; i++) {
        let holder = {};
        for(let j = 0; j < test[0].questions.length; j++) {
            if(answers[i].question_id == test[0].questions[j].question_id) {
                holder.question_id = answers[i].question_id;
                holder.answer = answers[i].answer;
                holder.question_score = test[0].questions[j].question_score;
                break;
            }
        }
        questionData.push(holder);
      }
      //console.log(questionData);
      for (let i = 0; i < questionData.length; i++) {
        console.log(questionData[i]);
        let result = await gradeQuestion(questionData[i].question_id, questionData[i].answer, questionData[i].question_score);
        result.comments = "";
        data.scores.push(result);
      }
      

      //console.log("DATA\n", data);
      data.isPublished = false;
      const newScore = new Score(data);
      await newScore.save(); 
      
      return new Promise((resolve, reject) => {
        return resolve (data);
    }) 
      
};


export const gradeTests = async (req, res) => {
    try {
       const { id: testID } = req.params;
       // Get all of the tests/exams in the DB.
       let data = [];
       testID.toUpperCase(); 
       console.log("GRADE TESTS:", testID.toUpperCase() , " COUNT: ", testID.length);

       const student_answers = await Answer.find({test_id:  testID.toUpperCase()});

       console.log(student_answers);
       
       for (let i = 0; i < student_answers.length; i++) {
           const resp = await gradeTest(student_answers[i]._id);
           data.push(resp)
       }
       
       fs.writeFileSync('./function.py', "");

       // Send an array of all the tests.
       res.status(200).json(data);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
 };