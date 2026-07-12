const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
    assetName: {
        type: String,
        required: true,
    },
    category: String,
    serialNumber: String,
    status: {
        type: String,
        default: "Available",
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Asset", assetSchema);