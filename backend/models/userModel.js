import { clear } from 'console';
import mongoose from 'mongoose';
const { randomUUID } = require('crypto');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: Number, required: true, unique: true},
    image: {type: String, required: false},
    role: {type: String, default: "user"}
    },
    {timestamps: true}
);