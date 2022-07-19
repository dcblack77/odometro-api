const { Schema, model } = require('mongoose');

const trackSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  positions: {
    type: Array
  }
});

module.exports = model('track', trackSchema);