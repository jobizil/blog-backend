const db = require('../config/database')();
const logger = require('../utils/logger');

const faker = require('faker');
const User = require('../models/users.model');

const destoryData = async () => {
  try {
    await User.deleteMany();
    logger.log('info', 'Database Purged!');
    process.exit();
  } catch (error) {
    logger.log('info', `${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') destoryData();
