const Resource = require('../models/Resource');
const express = require('express');
const router = express.Router();

const { tagsExist } = require('../services/tagService');

// Get all resources
router.get('/resources', async (req, res) => {
	console.log("GET /resources")
	try {
    	const resources = await Resource.find();
    	res.status(200).json(resources);
	} catch (error) {
    	res.status(500).json({ error: 'Internal server error' });
	}
});

// Get a single resource by ID
router.get('/resources/:id', async (req, res) => {
	try {
		const resource = await Resource.findById(req.params.id);
		if (!resource) {
			return res.status(404).json({ error: 'Product not found' });
		}
    	res.status(200).json(resource);
	} catch (error) {
    	res.status(500).json({ error: 'Internal server error' });
	}
});

// Create resources
router.post('/resources', async (req, res) => {
	const tagsAreValid = await tagsExist([...new Set(req.body.resources.flatMap(resource => resource.tags))]);
    if(tagsAreValid === false){
        return res.status(400).json({ error: 'Invalid tags' });
	}

    try {
        const newResources = await Resource.insertMany(req.body.resources);
        res.status(200).json({newRecords: newResources});
	} catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error', error_msg: error});
	}
})

module.exports = router;