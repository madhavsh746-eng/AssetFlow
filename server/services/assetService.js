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

module.exports = {
    getAllAssets,
    getAssetById,
    createAsset,
};