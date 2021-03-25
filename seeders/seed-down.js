const logger = require('../utils/logger')
const User = require('../models/users.model')
const Article = require('../models/articles.model')
const Comment = require('../models/comments.model')
require('../config/database')()

const destoryData = async () => {
	try {
		await User.deleteMany()
		await Article.deleteMany()
		await Comment.deleteMany()
		logger.log('info', 'Database Purged!')
		process.exit()
	} catch (error) {
		logger.log('info', `${error}`)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') destoryData()
