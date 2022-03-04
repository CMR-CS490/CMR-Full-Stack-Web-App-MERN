import express from 'express';

import { getQuestions, createQuestion, getQuestion } from '../controllers/questions.js'

const router = express.Router();

// localhost:5000/api/questions
router.get('/', getQuestions); // Get all the questions from the DB.
router.post('/', createQuestion); // create the questions from the DB.
router.get('/:id', getQuestion); // create the questions from the DB.

export default router;