const mongoose = require('mongoose');

const { database_uri, database_uri_test, env } = require('./index');
const logger = require('../utils/logger');

async function connectToDatabase() {
  let connectionString;
  try {
    const options = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    // Check database env
    switch (env) {
      case 'development':
        connectionString = await mongoose.connect(database_uri, options);
        logger.log('info', `Database connected on ${database_uri}.`);
        break;
      case 'test':
        connectionString = await mongoose.connect(database_uri_test, options);
        logger.log('info', `Database connected on ${database_uri_test}.`);
    }
  } catch (error) {
    logger.log('error', `${error.message}`);
    process.exit(1);
  }
}

module.exports = connectToDatabase;

// ${connectionString.connection.host}
