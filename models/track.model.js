const { Schema, model } = require('mongoose');

const trackSchema = new Schema({
  id: {
    type: String,
    default: `${ new Date().toISOString() }`
  },
  initialKmtrs: {
    type: String, 
    require: true
  },
  finishKmtrs: {
    type: String,
    require: true
  },
  coords: {
    type: Array
  }
});

module.exports = model('track', trackSchema);