// backend/server.js
import express from 'express';
import connectDB from './config/db.js'; // Import the connectDB function
import Report from './models/reportModel.js'; // Import the Report model
import User from './models/userModel.js'; // Import the Report model
import router from './routes/userRoutes.js'; // Import the user routes

const app = express();


// Connect to MongoDB
await connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests

// Router to all routes
app.use('', router); // Use Router on userRoutes


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
