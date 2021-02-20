const mongoose = require('mongoose')

const { database_uri, env } = require('./index')
const logger = require('../utils/logger')

const connectToDatabase = async () => {
	const options = {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
	const connectionString = await mongoose.connect(database_uri, options)

	logger.log('info', `Database connected on ${connectionString.connection.host} in ${env} mode.`)
}

module.exports = connectToDatabase
