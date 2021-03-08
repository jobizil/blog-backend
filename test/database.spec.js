const { expect } = require('chai')

const mongoose = require('mongoose')
let { database_uri_test, env, mongo_options } = require('../config')
const logger = require('../utils/logger')

describe('Check Database Connection', async () => {
  it('Should connect and disconnect to mongodb', async () => {
    mongoose.disconnect()
    mongoose.connection.on('disconnected', () => {
      expect(mongoose.connection.readyState).to.equal(0)
    })
    mongoose.connection.on('connection', () => {
      expect(mongoose.connection.readyState).to.equal(1)
    })
    mongoose.connection.on('error', () => {
      expect(mongoose.connection.readyState).to.equal(99)
    })
    env = 'test'
      ? await mongoose.connect(database_uri_test, mongo_options)
      : await mongoose.connect(database_uri_test, mongo_options)
  })

  after(async () => {
    await mongoose.disconnect()
    logger.log('debug', 'Database Connection closed.')
  })
})
