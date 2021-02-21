const chai = require('chai')
const chaiHttp = require('chai-http')

const User = require('../../models/users.model')
const app = require('../../app')
const { fakeUser } = require('../../data/_user')

chai.should()
chai.use(chaiHttp)

describe('POST - Register user route', async () => {
	it('Should return error if request body is empty', (done) => {
		chai
			.request(app)
			.post('/api/v1/users')
			.end((err, res) => {
				res.should.have.status(400)
				res.body.should.have.a('object')
				res.text.should.contain('Invalid Request')
			})
		done()
	})

	it('Should Register new user with valid data', (done) => {
		const createUser = fakeUser.registerUser
		chai
			.request(app)
			.post('/api/v1/users')
			.send(createUser)
			.end((err, res) => {
				res.should.have.status(201)
				res.should.have.a('object')
			})
		done()
	})
})
