require('../config/database')()
const logger = require('../utils/logger')
const User = require('../models/users.model')
const Article = require('../models/articles.model')
const users = require('../data/_user')
const articles = require('../data/_articles')

const importData = async () => {
  try {
    await User.deleteMany()
    await Article.deleteMany()
    await User.insertMany(users)
    await Article.insertMany(articles)
    logger.info('Data Seeded')
    process.exit()
  } catch (error) {
    logger.log('info', `${error}`)
    process.exit(1)
  }
}
if (process.argv[2] === 'i') {
  importData()
}
