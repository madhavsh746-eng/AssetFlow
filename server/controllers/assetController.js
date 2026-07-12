const assetService = require("../services/assetService");

const getAssets = async (req, res) => {
    try {
        const assets = await assetService.getAllAssets();

        res.status(200).json({
            success: true,
            data: assets,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAsset = async (req, res) => {
    try {
        const asset = await assetService.getAssetById(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found",
            });
        }

        res.status(200).json({
            success: true,
            data: asset,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const addAsset = async (req, res) => {
    try {
        const asset = await assetService.createAsset(req.body);

        res.status(201).json({
            success: true,
            data: asset,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getAssets,
    getAsset,
    addAsset,
};