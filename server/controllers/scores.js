import mongoose from 'mongoose';

import Score from "../models/scores.js";

export const getStudentScores = async (req, res) => {
   try {
      // Get all of the tests/exams in the DB
      const { testid: testID } = req.params;
      const { username: username } = req.params;
      
      // console.log(req.params)

      const studentScores = await Score.find({username: username, test_id: testID});

      console.log("Sending all Visible SCORES for Answers in the DB: ", { studentScores });

      // Send an array of all the tests.
      res.status(200).json(studentScores);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const updateScore = async (req, res) => {
   const { id: _id } = req.params; // id is got from URL.
   const score = req.body; // Sent from the frontend form.

   if (!(mongoose.Types.ObjectId.isValid(_id))) return res.status(404).send('No Score with that id');

   const updatedScore = await Score.findByIdAndUpdate(_id, { ...score, _id }, { new: true });

   res.json(updatedScore);
}


export const publishScores = async (req, res) => {
   const { testid: testID } = req.params; // id is got from URL.

   let scores = await Score.find({test_id : testID.toUpperCase()});

   //const updatedScore = await Score.findByIdAndUpdate(_id, { published : true});
   for (let i = 0; i < scores.length; i++) {
      await Score.findByIdAndUpdate(scores[i]._id, { isPublished : true});
   }
   scores = await Score.find({test_id : testID}); 
   
   

   res.status(200).json(scores);
}