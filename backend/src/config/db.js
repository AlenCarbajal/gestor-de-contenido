const mongoose = require('mongoose');
const config = require('config');

const logger = require('../utils/logger');

const MONGO_URI = config.get('database.uri');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info('MongoDB connected successfully');
  } catch (err) {
    logger.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};
module.exports = connectDB;