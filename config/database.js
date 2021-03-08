const mongoose = require('mongoose')

let { database_uri, database_uri_test, env, mongo_options } = require('./index')
const logger = require('../utils/logger')

// env = 'test'
async function connectToDatabase() {
  let connectStr
  try {
    // Check database env

    if (env !== 'test') {
      connectStr = await mongoose.connect(database_uri, mongo_options)
      logger.log('info', `Database connected on ${database_uri}.`)
    } else {
      connectStr = await mongoose.connect(database_uri_test, mongo_options)
      logger.log('info', `Database connected on ${database_uri_test}.`)
    }
  } catch (error) {
    logger.log('error', `${error.message}`)
    process.exit(1)
  }
}

module.exports = connectToDatabase

// ${connectionString.connection.host}
//  switch (env) {
//       case 'development':
//         connectStr = await mongoose.connect(database_uri, mongo_options)
//         logger.log('info', `Database connected on ${database_uri}.`)
//         break
//       case 'test':
//         connectStr = await mongoose.connect(database_uri_test, mongo_options)
//         logger.log('info', `Database connected on ${database_uri_test}.`)
//     }
//   }
