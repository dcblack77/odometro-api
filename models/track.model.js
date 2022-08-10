const { Schema, model } = require('mongoose');

const trackSchema = new Schema({
  timestamp: {
    initial: {
      type: String,
      require: true
    },
    finish: {
      type: String,
      default: new Date(Date.now()).toISOString()
    }
  },
  totalKmtrs: Number,
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