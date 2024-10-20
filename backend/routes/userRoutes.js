import express from 'express';
const router = express.Router();
import { createUser, loginUser } from '../controllers/userController.js';

//Creates new User
router.post('/user', createUser);

//Logins in a User
router.post('/login', loginUser);

export default router;
