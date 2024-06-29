const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  categories: { type: [String], required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', required: true }]
},{timestamps: true});

module.exports = mongoose.model('Resource', resourceSchema);
  