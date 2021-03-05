const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const server = require('../app');
const User = require('../models/users.model');
const { database_uri_test } = require('../config');
const { registerUserValidation } = require('../middlewares/userValidation');

chai.should();
chai.use(chaiHttp);

describe('User Route', async () => {
  before(async () => {
    await mongoose.connect(database_uri_test, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  beforeEach(async () => {
    await User.deleteMany();
  });

  describe('POST - Register user route', () => {
    it('Should Register new user with valid data', async () => {
      const user = {
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: '1234',
      };
      // FIXME Fix User Reg Validation
      // const createUser = await registerUserValidation(user);

      await User.insertMany(user);
      chai.request(server).post('api/v1/register').send(user);
    });
  });
});
