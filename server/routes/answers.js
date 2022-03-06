import express from 'express';

import { getStudentAnswers,  createAnswer } from '../controllers/answers.js'

const router = express.Router();

// localhost:5000/api/answers
router.get('/', getStudentAnswers); // Get all the Student Test Answers from the DB.
router.post('/', createAnswer); // create new Student Test Answer the DB.

export default router;