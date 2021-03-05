const chai = require('chai');
const mongoose = require('mongoose');
const { database_uri_test } = require('../config');

chai.should();

describe('Database Connection', async () => {
  it('Should connect to mongodb', async () => {
    before(async () => {
      await mongoose.connect(database_uri_test, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    });
  });
  after(async () => {
    await mongoose.disconnect();
  });
});
