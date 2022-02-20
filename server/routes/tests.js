import express from 'express';

import { getTests, createTests } from '../controllers/tests.js'

const router = express.Router();

// localhost:5000/posts
router.get('/', getTests);
router.post('/', createTests);

export default router;