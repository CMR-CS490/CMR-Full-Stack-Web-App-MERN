import express from 'express';

import { gradeTests } from '../controllers/grade.js'

const router = express.Router();

// localhost:5000/api/grade
router.get('/:id', gradeTests); // Grade all the tests from DB for the testID

export default router;