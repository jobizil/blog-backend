const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')

const server = require('../app')
const User = require('../models/users.model')
const { database_uri, mongo_options } = require('../config')
const { registerUserValidation } = require('../middlewares/userValidation')

chai.should()
chai.use(chaiHttp)

describe('User Route', async () => {
  before(async () => {
    await mongoose.connect(database_uri, mongo_options)
  })
  beforeEach(async () => {
    await User.deleteMany()
  })

  describe('POST - Register user route', () => {
    it('Should Register new user with valid data', async done => {
      const user = {
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: '1234567',
      }
      // FIXME Fix User Reg Validation
      // const createUser = await registerUserValidation(user);

      await User.insertMany(user)
      chai
        .request(server)
        .post('api/v1/register')
        .send(user)
        .end((err, res) => {
          if (err) {
            console.log(err)
          }
          expect(res.status).to.equal(201)
          done()
        })
    })
  })

  // describe('POST - Login user route', () => {
  //   it('Should login user with valid data', async () => {
  //     const user = {
  //       email: 'johndoe@example.com',
  //       password: '1234567',
  //     }
  //     await User.findOne({ email: user.email })
  //     chai.request(server).post('api/v1/auth/login').send(user)
  //   })
  // })
})
