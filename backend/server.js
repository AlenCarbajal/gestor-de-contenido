const express = require('express');
const config = require('config');
const cors = require('cors');

const routes = require('./routes');
const connectDB = require('./db');

const PORT = process.env.PORT || config.get('server').port;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
