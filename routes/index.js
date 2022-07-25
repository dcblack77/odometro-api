const { Router } = require('express');
const trackerRoutes = require('./tracker.routes');
const api = Router();


api.use('/trackers', trackerRoutes);


module.exports = api;