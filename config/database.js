const mongoose = require('mongoose');

async function connectDatabase() {

  try {

    await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log('MongoDB conectado');

  } catch (error) {

    console.error(error);

  }

}

module.exports = connectDatabase;