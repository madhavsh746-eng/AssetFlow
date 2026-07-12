const Assignment = require("../models/Assignment");
const Asset = require("../models/Asset");

// Assign Asset
exports.assignAsset = async (req, res) => {
  try {
    const { asset } = req.body;

    const existingAsset = await Asset.findById(asset);

    if (!existingAsset)
      return res.status(404).json({ message: "Asset not found" });

    if (existingAsset.isAssigned)
      return res.status(400).json({ message: "Asset already assigned" });

    const assignment = await Assignment.create(req.body);

    existingAsset.isAssigned = true;
    existingAsset.status = "Assigned";
    existingAsset.currentAssignment = assignment._id;

    await existingAsset.save();

    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Return Asset
exports.returnAsset = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);

    if (!assignment)
      return res.status(404).json({ message: "Assignment not found" });

    assignment.status = "Returned";
    assignment.returnedDate = new Date();

    await assignment.save();

    await Asset.findByIdAndUpdate(assignment.asset, {
      status: "Available",
      isAssigned: false,
      currentAssignment: null,
    });

    res.json({ message: "Asset returned successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Assignments
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("asset")
      .populate("assignedTo")
      .populate("assignedBy")
      .populate("department");

    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Assignment History
exports.assignmentHistory = async (req, res) => {
  try {
    const history = await Assignment.find()
      .populate("asset")
      .populate("assignedTo");

    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};