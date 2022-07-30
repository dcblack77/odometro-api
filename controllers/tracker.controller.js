const Tracker = require('../models/track.model');

const earthRatio = 6371;

async function saveTracker(req, res) {
  try {
    req.body.totalKmtrs = await getKilometers(req.body.coords);
    const newTrack = new Tracker(req.body);
    await newTrack.save();
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

async function getKilometers(coords) {
  try {
    let distance = 0;
    let long = [];
    let lat = [];
    if (coords.length > 1) {
      for (let index = 0; index < coords.length; index++) {
        if(i > 0) {

        }

        const element = coords[index];
        
      }
    }
  } catch (error) {

  }
}

function HaversineForm(long, lat) {
  return (earthRatio * ((
              Math.acos(
                Math.cos(radians(lat[0]))
              ) * Math.cos(radians(lat[1]))
      ) + (
          Math.sin(radians(lat[0])) * Math.sin(radians(lat[1]))
      )) * Math.cos(radians((long[0]-long[1])))
  );
}

function radians(coord) {
  return (90 - coord) * (Math.PI/180);
}

// =6371*ACOS(COS(RADIANES(90-A853))*COS(RADIANES(90-A854))+SENO(RADIANES(90-A853))*SENO(RADIANES(90-A854))*COS(RADIANES(B853-B854)))9


module.exports = {
  saveTracker,
  getTrackers,
  getTrackerById
}