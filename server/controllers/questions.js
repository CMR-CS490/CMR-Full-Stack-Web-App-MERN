import mongoose from 'mongoose';

import Question from "../models/question.js";

export const getQuestions = async (req, res) => {
   try {
      // Get all of the tests/exams in the DB.
      const tests = await Question.find();

      //console.log("Fetching all questions from db:  ", { tests });

      // Send an array of all the tests.
      res.status(200).json(tests);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createQuestion = async (req, res) => {
   const question = req.body;
   console.log("Creating Question: ", question);
   // Create a new Test object from req.body's data.
   const newQuestion = new Question(question);
   try {
      await newQuestion.save(); // Save the test to the Database.
      res.status(201).json(newQuestion);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};