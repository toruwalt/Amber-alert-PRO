import Report from '../models/reportModel.js';
import User from '../models/userModel.js';

// Create a new report
export async function createReport(req, res) {
  try {
    const newReport = new Report(req.body);

    await newReport.save();
    res.status(201).json({ message: 'Report created successfully', newReport });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        message: 'Report validation failed',
        error: errors[0],
      });
    }

    return res.status(500).json({
      message: 'An unexpected error occurred while creating the report',
      error: error.message,
    });
  }
}
