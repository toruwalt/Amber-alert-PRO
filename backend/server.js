// backend/server.js
import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js'; // Import the connectDB function
import Alert from './models/alertModel.js'; // Import the Alert model
import User from './models/userModel.js'; // Import the Alert model
import router from './routes/userRoutes.js'; // Import the user routes

dotenv.config();
const app = express();


// Connect to MongoDB
await connectDB(); // This should call the connectDB function

// Middleware
app.use(express.json()); // Parse JSON requests

// Router to all routes
app.use('', router); // Use Router on userRoutes

const newAlert = new Alert({
    name: 'John Doe',
    age: 25,
    description: 'John Doe is missing',
    lastSeenLocation: 'Ikeja',
    createdBy: 'Jane Doe'
});

newAlert.save(); // Save the new alert to the database

console.log(newAlert);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
