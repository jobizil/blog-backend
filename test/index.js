const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')
// const { webport, env } = require('../config')

// Assertion Style
chai.should()
chai.use(chaiHttp)

describe('HOME', () => {
	// Get root of api directory
	describe('GET /api/v1', () => {
		before(async () => {
			res = await chai.request(app).get('/api/v1')
		})
		it('Should get root directory', () => {
			res.should.have.status(200)
		})
		it('Should be a String', () => {
			res.body.should.be.a('object')
		})
		it('Should be a welcome greeting', () => {
			res.text.should.include.string('Welcome to my api')
		})
		it('Should have property `status` of success', () => {
			res.body.should.have.property('status').eq('success')
		})
	})

	// Get all users route
	describe('GET /api/v1/users', () => {
		before(async () => {
			res = await chai.request(app).get('/api/v1/users')
		})
		it('Should GET users route', () => {
			res.should.have.status(200)
		})
	})
})
