import { clear } from 'console';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

//Schema for the User collection
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    phone: {type: Number, required: true, unique: true},
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
