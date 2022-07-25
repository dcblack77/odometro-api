const Tracker = require('../models/track.model');

async function saveTracker(req, res) {
  try {
    const newTrack = new Tracker(req.body);
    newTrack.save();
    return res.json({
      tracker: newTrack
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getTrackers(req, res) {
  try {
    const trackers = await Tracker.find()
                                  .skip(0)
                                  .limit(4)
                                  .sort({_id: 'desc'});
    return res.json(trackers);
  } catch (error) {
    return res.status(500).json(error);
  }

}

async function getTrackerById(req, res) {
  try {
    const tracker = await Tracker.findById(req.params.id);
    return res.json(tracker);   
  } catch (error) {
    return res.status(500).json(error);
  }
}


module.exports = {
  saveTracker,
  getTrackers,
  getTrackerById
}