const express = require('express');
const router = express.Router();

const resourceRouter = require('./resourceRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/resources', resourceRouter);
router.use('/tags', tagRoutes);

module.exports = router;