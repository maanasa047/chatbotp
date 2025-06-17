import express from 'express';
import { saveMessages, getMessages } from '../controllers/chatController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getMessages);
router.post('/save', authMiddleware, saveMessages);

export default router;
