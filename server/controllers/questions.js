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