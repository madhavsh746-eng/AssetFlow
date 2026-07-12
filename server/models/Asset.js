const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema(
  {
    assetTag: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },

    serialNumber: {
      type: String,
      trim: true,
    },

    purchaseDate: {
      type: Date,
    },

    purchaseCost: {
      type: Number,
    },

    warrantyExpiry: {
      type: Date,
    },

    condition: {
      type: String,
      enum: ['New', 'Good', 'Fair', 'Damaged'],
      default: 'Good',
    },

    status: {
      type: String,
      enum: ['Available', 'Assigned', 'Maintenance', 'Retired'],
      default: 'Available',
    },

    // Added for assignment tracking

    isAssigned: {
      type: Boolean,
      default: false,
    },

    currentAssignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Asset', assetSchema);
