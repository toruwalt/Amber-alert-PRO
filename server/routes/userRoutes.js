import express from 'express';
const router = express.Router();
import { createUser } from '../controllers/userController.js';
import { createReport } from '../controllers/reportController.js';
import userExists from '../validators/userValidators.js';

//Creates new User
router.post('/create', createUser);
router.post('/:username/reports', userExists, createReport);

export default router;
