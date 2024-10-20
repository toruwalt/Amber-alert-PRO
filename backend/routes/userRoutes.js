import express from 'express';
const router = express.Router();
import { verifyToken } from '../middleware/authMiddleware.js';
import { createUser, loginUser, getUser } from '../controllers/userController.js';

//Creates new User
router.post('/users', createUser);

//Logins in a User
router.post('/login', loginUser);

//Gets a User
router.get('/users/:id', verifyToken, getUser);

export default router;
