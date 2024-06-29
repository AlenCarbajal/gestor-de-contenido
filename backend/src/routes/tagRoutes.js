const express = require('express');

const tagController = require('../controllers/tagController');

const router = express.Router();

router.get('/', tagController.getAllTags);
router.post('/', tagController.createTags);
router.post('/validate', tagController.validateTags);

module.exports = router;