const Asset = require("../models/Asset");

// Get All Assets
const getAllAssets = async () => {
    return await Asset.find();
};

// Get Asset By ID
const getAssetById = async (id) => {
    return await Asset.findById(id);
};

// Create Asset
const createAsset = async (data) => {
    return await Asset.create(data);
};

// Allocate Asset
const allocateAsset = async (id, userId) => {
    const asset = await Asset.findById(id);

    if (!asset) {
        throw new Error("Asset not found");
    }

    // Check if asset is already allocated
    if (asset.status === "Allocated") {
        throw new Error("Asset already allocated");
    }

    asset.status = "Allocated";
    asset.assignedTo = userId;

    await asset.save();

    return asset;
};

// Return Asset
const returnAsset = async (id) => {
    const asset = await Asset.findById(id);

    if (!asset) {
        throw new Error("Asset not found");
    }

    // Check if asset is already available
    if (asset.status === "Available") {
        throw new Error("Asset is already available");
    }

    asset.status = "Available";
    asset.assignedTo = null;

    await asset.save();

    return asset;
};

module.exports = {
    getAllAssets,
    getAssetById,
    createAsset,
    allocateAsset,
    returnAsset,
};