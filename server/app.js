const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const authRoutes = require("./routes/authRouters");
const userRoutes = require("./routes/userRouters");
const assetRoutes = require("./routes/assetRouters");
const assignmentRoutes = require("./routes/assignmentRouters");
const departmentRoutes = require("./routes/departmentRouters");

// API Routes
app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/assets", assetRouters);
app.use("/api/assignments", assignmentRouters);
app.use("/api/departments", departmentRouters);

// Base Health Route
app.get("/", (req, res) => {
    res.status(200).send("AssetFlow API is running");
});

const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

module.exports = app;
