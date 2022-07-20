const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (error) {
    console.error("Error connecting database: ", error);
  }
}
