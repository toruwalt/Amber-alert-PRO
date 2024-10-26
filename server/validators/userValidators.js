import User from '../models/userModel.js';
import mongoose from 'mongoose';

export default async function validateUserExists(req, res, next) {
  const { username } = req.params;  // Extract userName from the URL

  
  // Check if the user exists
  const user = await User.findOne({ username }, '_id');
  console.log('User', user);
  if (!user) {
    return res.status(400).json({
      message: 'User not found. Please provide a valid username.',
    });
  }

  next(); // Proceed to the next middleware/controller if validation passes
}

