import express from 'express';

import { gradeTests } from '../controllers/grade.js'

const router = express.Router();

// localhost:5000/posts
router.get('/:id', gradeTests); // Get all the tests in the DB.

export default router;