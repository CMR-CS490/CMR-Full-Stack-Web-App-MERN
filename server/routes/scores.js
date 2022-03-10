import express from 'express';

import { getStudentScores, updateScore, publishScores } from '../controllers/scores.js'

const router = express.Router();

// localhost:5000/posts
router.get('/publish/:testid', publishScores);
router.get('/:username/:testid', getStudentScores); // Get all the Scores in the DB.
router.post('/:username/:testid', updateScore); // Get all the Scores in the DB.

export default router;