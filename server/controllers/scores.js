import mongoose from 'mongoose';

import Score from "../models/scores.js";

export const getStudentScores = async (req, res) => {
   try {
      // Get all of the tests/exams in the DB
      const { testid: testID } = req.params;
      const { username: username } = req.params;

      const studentScores = await Score.find({username: username, test_id: testID});

      console.log("Sending all Visible tests Answers in the DB: ", { studentScores });

      // Send an array of all the tests.
      res.status(200).json(studentScores);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

