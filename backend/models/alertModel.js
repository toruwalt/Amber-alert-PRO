import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
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
  createdBy: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });


const Alert = mongoose.model('Alert', alertSchema);

export default Alert;
