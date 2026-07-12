const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const assetRoutes = require("./routes/assetRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/assignments", assignmentRoutes);

// Base Health Route
app.get('/', (req, res) => {
  res.send('AssetFlow API is running');
});

module.exports = app;
