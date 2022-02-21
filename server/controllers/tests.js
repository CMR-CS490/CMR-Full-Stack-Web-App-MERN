import mongoose from 'mongoose';

import Test from "../models/test.js";

export const getTests = async (req, res) => {
   try {
      // Get all of the tests/exams in the DB.
      const tests = await Test.find();

      console.log("Sending all tests in the DB: ", { tests });

      // Send an array of all the tests.
      res.status(200).json(tests);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createTest = async (req, res) => {
   const test = req.body;

   // Create a new Test object from req.body's data.
   const newTest = new Test(test);
   try {
      await newTest.save(); // Save the test to the Database.
      res.status(201).json(newTest);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateTest = async (req, res) => {
   const { id: _id } = req.params; // id is got from URL.
   const test = req.body; // Sent from the frontend form.

   if (!(mongoose.Types.ObjectId.isValid(_id))) return res.status(404).send('No Test with that id');

   const updatedTest = await Test.findByIdAndUpdate(_id, { ...test, _id }, { new: true });

   res.json(updateTest);
}