require('dotenv').config({ path: '../.env' })
const mongoose = require('mongoose')
const faker = require('faker')
const User = require('../models/users.model')
const { env, database_uri, database_uri_test } = require('../config')
const logger = require('./logger')

const options = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true,
}
const seedUsers = async (name) => {
	const db_uri = env === name ? database_uri : database_uri_test
	console.log(db_uri)
	mongoose.connect(db_uri, options)
	try {
		let i
		const qty = 5
		const users = []
		for (i = 0; i < qty; i++) {
			users.push(
				new User({
					username: faker.internet.userName(),
					email: faker.internet.email(),
					password: faker.internet.password(),
					profilePhoto: faker.internet.avatar(),
				}),
			)
		}

		users.forEach(async (user) => {
			await User.deleteMany()
			await User.create(user)
		})
		logger.info('Data Seeded')
		process.exit()
	} catch (error) {
		logger.log('info', `${error}`)
	}
}

seedUsers('test')
