import express from 'express';
import { getPosts } from '../controllers/linkedin.controller.js';

const router = express.Router();

router.get('/', getPosts);

export default router;