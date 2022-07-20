require('dotenv').config();
require('./config/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Track = require('./models/track.model');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.post('/tracking', async (req, res) => {
  let body = {
    positions: req.body,
    id: new Date().toDateString()
  }
  const newTrack = new Track(body);
  console.log(body)
  newTrack.save();
  res.json({
    track: newTrack
  });
});

app.get('/track', async (req, res) => {
  const track = await Track.findOne({_id: '62d78074cf95ca4fde4f88f5'});

  const coords = track.positions.map(item => [item.long, item.lat])

  res.json({
    track,
    coords
  })
});



async function bootstrap() {
  await app.listen(process.env.PORT);
  console.log(`Server running in port ${process.env.PORT}`);
}

bootstrap();