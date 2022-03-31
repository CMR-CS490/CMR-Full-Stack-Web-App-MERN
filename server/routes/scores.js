import express from 'express';

import { getStudentScores, updateScore, publishScores, updateEachScore } from '../controllers/scores.js'

const router = express.Router();

// localhost:5000//api/score
router.post('/:scoreid/:questionid', updateEachScore); //update each questions for the score object
router.get('/publish/:testid', publishScores);
router.get('/:username/:testid', getStudentScores); // Get all the Scores in the DB.
router.post('/:scoreid', updateScore); // update entire scores in the DB


export default router;