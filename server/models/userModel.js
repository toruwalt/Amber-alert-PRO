import { clear } from 'console';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';


const { Schema } = mongoose;
const isEmail = validator.isEmail;

//Schema for the User collection
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {type: String, required: true},
  firstname: {type: String, required: false},
  lastname: {type: String, required: false},
  phone: {type: String, required: true, unique: true},
  image: {type: String, required: false},
  role: {type: String, default: "user"}
},
  {timestamps: true}
);

//Hashes the user password with bcrypt
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


//Creates a model from User Schema
const User = mongoose.model('User', userSchema);
export default User;
