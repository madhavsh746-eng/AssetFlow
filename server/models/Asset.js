const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
    {
        assetName: {
            type: String,
            required: true,
        },

        category: {
            type: String,
        },

        serialNumber: {
            type: String,
        },

        status: {
            type: String,
            enum: ["Available", "Allocated"],
            default: "Available",
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Asset", assetSchema);