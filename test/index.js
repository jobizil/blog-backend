const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')

// Assertion Style
chai.should()
chai.use(chaiHttp)

describe('GET Api Root route', () => {
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
})
