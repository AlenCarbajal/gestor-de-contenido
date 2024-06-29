const Tag = require('../models/Tag');

async function getNumberOfValidTags(tagIds) {
    const validTags = await Tag.find({ '_id': { $in: tagIds } })
    return validTags.length;
};

async function tagsExist(tags) {
    const numberOfValidTags = await getNumberOfValidTags(tags);
    return numberOfValidTags === tags.length;
}

async function anyTagExists(tags) {
    const numberOfValidTags = await getNumberOfValidTags(tags);
    return numberOfValidTags > 0;
}

async function createTags(tags) {
    const tagNames = tags.map(tag => tag.name);
    const validTags = await Tag.find({ name: { $in: tagNames } });
    const validTagNames = validTags.map(tag => tag.name);
    const newTags = tags.filter(tag => !validTagNames.includes(tag.name));
    await Tag.insertMany(newTags);
    return newTags;
}
1
module.exports = { tagsExist, anyTagExists, getNumberOfValidTags, createTags };