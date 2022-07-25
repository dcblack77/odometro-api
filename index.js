require('dotenv').config();
require('./config/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Track = require('./models/track.model');
const routes = require('./routes');




// Export XLSX data
const json2xls = require('json2xls');
const { writeFileSync } = require('node:fs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(require('cors')());

app.use('/api', routes);

app.get('/export', async (req, res) => {
  try {
    const track = await Track.findOne({_id: '62d78075cf95ca4fde4f88f7'});
    const xls = json2xls(track.positions);
    await writeFileSync(`./xls/data-${track._id}.xlsx`, xls, 'binary');
    res.json({
      ok: true
    });
  } catch (error) {
    res.json({
      error
    });
  }
});


async function bootstrap() {
  await app.listen(process.env.PORT);
  console.log(`Server running in port ${process.env.PORT}`);
}

bootstrap();