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

export const createTests = async (req, res) => {
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
