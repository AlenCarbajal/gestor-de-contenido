const Tag = require('../models/Tag');
const express = require('express');
const router = express.Router();
const tagService = require('../services/tagService');

// Get all tags
router.get('/tags', async (req, res) => {
    console.log("GET /tags")
    try {
        const tags = await Tag.find();
        res.json(tags);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

//Validate tags
router.post('/tags/validate', async (req, res) => {
    try {
        if(tagService.tagsExist(req.body.tags) === true){
            res.status(200).json({ msg: 'Valid tags', error: false});
        } else {
            res.status(400).json({ error: 'Invalid tags' });
        }
    } catch (error) {
        console.error('Error validando tags:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create Tags
router.post('/tags/create', async (req, res) => {
    try {
        const newTags = await tagService.createTags(req.body.tags);
        res.status(200).json(newTags);
    } catch (error) {
        console.error('Error creando tags:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;