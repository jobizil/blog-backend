const chai = require('chai')
const { expect } = require('chai')
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
      expect(res.status).to.equal(200)
    })
    it('Should be an Object', () => {
      expect(res.body).to.be.a('object')
    })
    it('Should be a welcome greeting', () => {
      res.text.should.include.string('Welcome to my api')
    })
    it('Should have property `status` of success', () => {
      res.body.should.have.property('status').eq('success')
    })
  })
})
