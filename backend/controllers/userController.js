import User from '../models/userModel.js';
import { generateToken, verifyToken } from '../middleware/authMiddleware.js';

// Loads env variables
import dotenv from 'dotenv';
dotenv.config();


// POST /api/users - Create a new user
export async function createUser(req, res) {
  try {
    const newUser = new User(req.body); // Assuming req.body has the user data
    
    const token = generateToken(newUser._id);
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', newUser, token });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};
