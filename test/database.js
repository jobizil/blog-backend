'use strict'
const chai = require('chai')

const connectToDatabase = require('../config/database')

chai.should()

describe('Test Database Connection', () => {
	let connectionClient = undefined
	it('Should be connected', async () => {
		connectionClient = await connectToDatabase()
	})
})
