const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String, required: false } //TODO: agregar validación de color hexa
});

module.exports = mongoose.model('Tag', tagSchema);