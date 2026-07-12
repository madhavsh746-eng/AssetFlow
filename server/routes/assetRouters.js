const express = require("express");

const router = express.Router();

const {
    getAssets,
    getAsset,
    addAsset,
} = require("../controllers/assetController");

router.get("/", getAssets);

router.get("/:id", getAsset);

router.post("/", addAsset);

module.exports = router;