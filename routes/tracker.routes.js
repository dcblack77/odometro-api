const { Router } = require('express');
const { getTrackerById, getTrackers, saveTracker } = require('../controllers/tracker.controller');
const route = Router();

route.get('/:id', getTrackerById);
route.get('/', getTrackers);
route.post('/', saveTracker);


module.exports = route;