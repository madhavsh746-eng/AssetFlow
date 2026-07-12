const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    action: {
      type: String,
      enum: [
        "CREATE",
        "UPDATE",
        "ASSIGN",
        "RETURN",
        "TRANSFER",
        "DELETE",
        "MAINTENANCE"
      ],
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AuditLog", auditLogSchema);