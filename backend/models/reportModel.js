import mongoose from 'mongoose';
import User from '../models/userModel.js'

const reportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  lastSeenLocation: { type: String, required: true },
  status: {  // active, inactive
    type: String,
    required: true,
    default: 'active',
    enum: ['active', 'resolved'] 
  },
  imageUrl: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });


const Report = mongoose.model('Report', reportSchema);

export default Report;
