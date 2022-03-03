import express from 'express';

import { getTests, createTest, updateTest, getStudentTests, getTest} from '../controllers/tests.js'

const router = express.Router();

// localhost:5000/posts
router.get('/', getTests); // Get all the tests in the DB.
router.post('/', createTest); // Create a new test.
router.patch('/:id', updateTest); // Update an existing Post. (We need an test id before we can update a test.)
router.get('/students', getStudentTests);
router.get('/:id', getTest);
export default router;