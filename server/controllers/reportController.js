import Report from '../models/reportModel.js';

// Create a new report
export async function createReport(req, res) {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res.status(201).json({ message: 'Report created successfully', newReport });
  } catch (error) {
    return res.status(500).json({
      message: 'An unexpected error occurred while creating the report',
      error: error.message,
    });
  }
}
