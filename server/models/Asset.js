const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  assetCode: {
    type: String,
    required: true,
    unique: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
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

  purchaseDate: {
    type: Date,
  },

  location: {
    type: String,
  },

  quantity: {
    type: Number,
    default: 1,
  },

  qrCode: {
    type: String,
  },

}, { timestamps: true });

module.exports = mongoose.model('Asset', assetSchema);
