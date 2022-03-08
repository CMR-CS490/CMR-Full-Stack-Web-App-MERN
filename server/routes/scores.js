import express from 'express';

import { getStudentScores, updateScore } from '../controllers/scores.js'

const router = express.Router();

// localhost:5000/posts
router.get('/:username/:testid', getStudentScores); // Get all the Scores in the DB.
router.post('/:username/:testid', updateScore); // Get all the Scores in the DB.

export default router;