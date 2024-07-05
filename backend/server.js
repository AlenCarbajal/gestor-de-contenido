const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const config = require('config');
const cors = require('cors');

const routes = require('./src/routes');
const connectDB = require('./src/config/db');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || config.get('server').port;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
