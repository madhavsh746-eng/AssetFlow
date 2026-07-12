const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asset',
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  assignedDate: {
    type: Date,
    default: Date.now,
  },
  returnedDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Assigned', 'Returned'],
    default: 'Assigned',
  },
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);