const express = require("express");

const router = express.Router();

const {
    getAssets,
    getAsset,
    addAsset,
    allocateAsset,
    returnAsset,
} = require("../controllers/assetController");

router.get("/", getAssets);

router.get("/:id", getAsset);

router.post("/", addAsset);

router.put("/:id/allocate", allocateAsset);

router.put("/:id/return", returnAsset);

module.exports = router;