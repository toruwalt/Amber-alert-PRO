import express from 'express';
const router = express.Router();
import { createUser } from '../controllers/userController.js';

//Creates new User
router.post('/user', createUser);

export default router;