import User from '../models/userModel.js';
import { generateToken, verifyToken } from '../middleware/authMiddleware.js';

// Loads env variables
import dotenv from 'dotenv';
dotenv.config();


// POST /api/users - Create a new user
export async function createUser(req, res) {
  try {
    console.log(req.body);
    const newUser = new User(req.body); // Assuming req.body has the user data
    
    const token = generateToken(newUser._id);
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', newUser, token });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Extract validation errors and send a more user-friendly response
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        message: 'User validation failed',
        error: errors[0],
      });
    }
    else if (error.code === 11000) { // 11000 is the code for duplicate key error
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];

      const errMsg = `The ${field} "${value}" is already in use. Please choose another ${field}.`;
      return res.status(400).json({ 
        message: 'Error creating user',
        error: errMsg 
      });
    }
    return res.status(500).json({
      message: 'An unexpected error occurred while creating the user',
      error: error.message,
    });
  }
};
