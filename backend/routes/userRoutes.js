import express from 'express';
const router = express.Router();
import { createUser } from '../controllers/userController.js';

//Creates new User
router.post('/api/user', createUser);

export default router;