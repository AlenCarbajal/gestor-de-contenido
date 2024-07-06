const mongoose = require('mongoose');

const logger = require('../utils/logger');

DB_USERNAME = process.env.DB_USERNAME;
DB_PASSWORD = process.env.DB_PASSWORD;

const MONGO_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@gestordecontenidotest.elpvefr.mongodb.net/?retryWrites=true&w=majority&appName=GestorDeContenidoTest;`

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