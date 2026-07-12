const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Base Health Route
app.get('/', (req, res) => {
  res.send('AssetFlow API is running');
});

module.exports = app;
