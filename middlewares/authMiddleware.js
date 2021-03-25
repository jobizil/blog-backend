const jwt = require('jsonwebtoken')

const { auth } = require('../config')
const User = require('../models/users.model')

const { handlerResponse } = require('../utils/error-handler')
// const { verifyUserToken } = require('./authToken')

// Verify Token
const authentecateUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization.replace('Bearer ', '')

		if (!token) {
			return handlerResponse(req, res, 401)
		}
		const decodedPayload = jwt.verify(token, auth.jwt_secret)
		const user = await User.findOne({
			_id: decodedPayload._id,
			token,
		})
		if (!user) {
			return handlerResponse(req, res, 401)
		}
		req.token = token
		req.user = user
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return handlerResponse(req, res, 401, null, 'Invalid or expiered token.')
		}
	}
	next()
}

module.exports = authentecateUser
