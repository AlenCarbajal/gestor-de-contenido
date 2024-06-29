const tagService = require('../services/tagService');
const logger = require('../utils/logger');
const Tag = require('../models/Tag');

const getAllTags = async (req, res) => {
    logger.info("GET /tags")
    try {
        const tags = await Tag.find();
        res.json(tags);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const validateTags = async (req, res) => {
    try {
        if(tagService.tagsExist(req.body.tags) === true){
            res.status(200).json({ msg: 'Valid tags', error: false});
        } else {
            res.status(400).json({ error: 'Invalid tags' });
        }
    } catch (error) {
        logger.error('Error validando tags:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createTags = async (req, res) => {
    try {
        const newTags = await tagService.createTags(req.body.tags);
        res.status(200).json(newTags);
    } catch (error) {
        logger.error('Error creando tags:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getAllTags, validateTags, createTags };