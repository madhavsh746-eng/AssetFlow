const Asset = require("../models/Asset");

const getAllAssets = async () => {
    return await Asset.find();
};

const getAssetById = async (id) => {
    return await Asset.findById(id);
};

const createAsset = async (data) => {
    return await Asset.create(data);
};

// Allocate Asset
const allocateAsset = async (id, userId) => {
    const asset = await Asset.findById(id);

    if (!asset) {
        throw new Error("Asset not found");
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