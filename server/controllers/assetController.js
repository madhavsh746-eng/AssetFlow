const Asset = require("../models/Asset");

// Create Asset
exports.createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Assets
exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.find()
      .populate("category")
      .populate("department")
      .populate("currentAssignment");

    res.json(assets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Asset By Id
exports.getAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id)
      .populate("category")
      .populate("department")
      .populate("currentAssignment");

    if (!asset)
      return res.status(404).json({ message: "Asset not found" });

    res.json(asset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Asset
exports.updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(asset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Asset
exports.deleteAsset = async (req, res) => {
  try {
    await Asset.findByIdAndDelete(req.params.id);
    res.json({ message: "Asset deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};