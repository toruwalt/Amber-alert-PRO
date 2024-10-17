// backend/server.js
import express from 'express';
import connectDB from './config/db.js'; // Import the connectDB function

const app = express();

// Connect to MongoDB
await connectDB(); // This should call the connectDB function

// Middleware
app.use(express.json()); // Parse JSON requests


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

