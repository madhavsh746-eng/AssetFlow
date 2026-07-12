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

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },

  assignedDate: {
    type: Date,
    default: Date.now,
  },

  expectedReturnDate: {
    type: Date,
  },

  returnedDate: {
    type: Date,
  },

  status: {
    type: String,
    enum: ['Assigned', 'Returned', 'Overdue'],
    default: 'Assigned',
  },

  remarks: {
    type: String,
  },

}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);