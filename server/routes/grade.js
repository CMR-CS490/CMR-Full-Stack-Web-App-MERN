import express from 'express';

import { gradeTest } from '../controllers/grade.js'

const router = express.Router();

// localhost:5000/posts
router.get('/:id', gradeTest); // Get all the tests in the DB.

export default router;