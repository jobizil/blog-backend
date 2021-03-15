const logger = require('../utils/logger')
const User = require('../models/users.model')
const Article = require('../models/articles.model')
require('../config/database')()

const destoryData = async () => {
  try {
    await User.deleteMany()
    await Article.deleteMany()
    logger.log('info', 'Database Purged!')
    process.exit()
  } catch (error) {
    logger.log('info', `${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') destoryData()
