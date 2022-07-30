const { Schema, model } = require('mongoose');

const trackSchema = new Schema({
  timestamp: {
    init: {
      type: Date,
      require: true
    },
    finish: {
      type: Date,
      default: new Date().getUTCDate()
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