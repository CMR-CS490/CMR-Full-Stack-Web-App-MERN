import mongoose from 'mongoose';

import Answer from "../models/answer.js";

export const getStudentAnswers = async (req, res) => {
   try {
      // Get all of the tests/exams in the DB
      const { id: testID } = req.params;
      const studentAnswers = await Answer.find({test_id: testID});

      console.log("Sending all Visible tests Answers in the DB: ", { studentAnswers });

      // Send an array of all the tests.
      res.status(200).json(studentAnswers);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createAnswer = async (req, res) => {
   const testAnswer = req.body;

   // Create a new Test object from req.body's data.
   const newTestAnswer = new Answer(testAnswer);
   try {
      await newTestAnswer.save(); // Save the test to the Database.
      res.status(201).json(newTestAnswer);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

