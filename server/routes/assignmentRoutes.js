const express = require("express");
const router = express.Router();

const {
  assignAsset,
  returnAsset,
  getAssignments,
  assignmentHistory,
} = require("../controllers/assignmentController");

router.post("/", assignAsset);
router.put("/:id/return", returnAsset);
router.get("/", getAssignments);
router.get("/history", assignmentHistory);

module.exports = router;