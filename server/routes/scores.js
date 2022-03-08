import express from 'express';

import { getStudentScores } from '../controllers/scores.js'

const router = express.Router();

// localhost:5000/posts
router.get('/:username/:testid', getStudentScores); // Get all the tests in the DB.

export default router;