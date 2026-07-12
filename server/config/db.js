const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;

    // Check if we should use the in-memory database
    if (process.env.USE_MEMORY_DB === 'true' || !uri) {
      console.log('Starting MongoDB Memory Server...');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      console.log('MongoDB Memory Server started.');
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    
    // Fallback: If local connection was refused, automatically switch to memory server
    if (error.message.includes('ECONNREFUSED')) {
      console.log('Local MongoDB not found. Automatically switching to MongoDB Memory Server...');
      try {
        const mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Memory Server Connected: ${conn.connection.host}`);
      } catch (fallbackError) {
        console.error(`Fallback Error: ${fallbackError.message}`);
        process.exit(1);
      }
    } else {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
