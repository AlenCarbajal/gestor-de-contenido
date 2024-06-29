const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const connectDB = require('./db');

const resourceRouter = require('./controllers/resourceController');
const tagRouter = require('./controllers/tagsController');

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use('/api', resourceRouter);
app.use('/api', tagRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
