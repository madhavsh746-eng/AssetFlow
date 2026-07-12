const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Available', 'Allocated', 'Maintenance', 'Retired'],
    default: 'Available',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
  qrCode: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Asset', assetSchema);
