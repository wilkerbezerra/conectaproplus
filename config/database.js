const mongoose = require('mongoose');

async function connectDatabase() {

  try {

    await mongoose.connect(
      'mongodb://127.0.0.1:27017/conectaproplus'
    );

    console.log('MongoDB conectado');

  } catch (error) {

    console.error(error);

  }

}

module.exports = connectDatabase;