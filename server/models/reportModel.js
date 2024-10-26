import mongoose from 'mongoose';
import User from '../models/userModel.js'

const reportSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide a name'] },
  age: { type: Number, required: [true, 'Please provide an age'] },
  description: { type: String, required: false },
  lastSeenLocation: {
    longitude: { type: Number, required: false },
    latitude: { type: Number, required: false }
  },
  status: {  // active, inactive
    type: String,
    required: true,
    default: 'active',
    enum: ['active', 'resolved'] 
  },
  imageUrl: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });



const Report = mongoose.model('Report', reportSchema);

export default Report;
