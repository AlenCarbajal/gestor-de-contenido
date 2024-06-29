const express = require('express');

const resourceController = require('../controllers/resourceController');

const router = express.Router();

router.get('/', resourceController.getAllResources);
router.get('/:id', resourceController.getResourceById);
router.post('/', resourceController.createResources);

module.exports = router;