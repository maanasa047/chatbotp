import express from 'express';
import { signup, login, forgotPassword } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword); // ✅ Add this

export default router;
