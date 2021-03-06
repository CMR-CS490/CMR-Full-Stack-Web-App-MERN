import express from 'express';

import { getStudentAnswers, createAnswer, getAnswer, getAnswerStudent } from '../controllers/answers.js'

const router = express.Router();

// localhost:5000/api/answers
router.get('/:id', getStudentAnswers); // Get all the Student Test Answers from the DB based on the testID
router.post('/', createAnswer); // create new Student Test Answer the DB.
router.get('/answer/:id', getAnswer); 
router.get('/:username/:testID', getAnswerStudent); 
export default router;