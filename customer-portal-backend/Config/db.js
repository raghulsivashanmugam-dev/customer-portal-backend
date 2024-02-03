const mongoose = require("mongoose");

const MONGOURI = process.env.MONGO_URL;


const InitiateMongoServer = async () => {
  try {
    console.log('MONGOURI', MONGOURI)
    await mongoose.connect(MONGOURI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  }catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;