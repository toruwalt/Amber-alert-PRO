import User from '../models/userModel.js';

// POST /api/users - Create a new user
export async function createUser(req, res) {
  try {
    const newUser = new User(req.body); // Assuming req.body has the user data
    await newUser.save(); 
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};
