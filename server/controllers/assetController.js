const assetService = require("../services/assetService");

const getAssets = async (req, res) => {
    try {
        const assets = await assetService.getAllAssets();

        res.status(200).json({
            success: true,
            data: assets,
        });
    } catch (error) {
        return res.status(500).json({
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
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const addAsset = async (req, res) => {
    try {
        if (!req.body.assetName) {
            return res.status(400).json({
                success: false,
                message: "Asset name is required",
            });
        }
        const asset = await assetService.createAsset(req.body);

        res.status(201).json({
            success: true,
            data: asset,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const allocateAsset = async (req, res) => {
    try {
        if (!req.body.userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }
        const asset = await assetService.allocateAsset(
            req.params.id,
            req.body.userId
        );

        res.status(200).json({
            success: true,
            data: asset,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const returnAsset = async (req, res) => {
    try {
        const asset = await assetService.returnAsset(req.params.id);

        res.status(200).json({
            success: true,
            data: asset,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getAssets,
    getAsset,
    addAsset,
    allocateAsset,
    returnAsset,
};