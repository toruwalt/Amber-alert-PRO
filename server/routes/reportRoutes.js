import express from 'express';
const router = express.Router();
import { createReport } from '../controllers/reportController.js';

//Creates new Report
router.post('/report', createReport);

export default router;
