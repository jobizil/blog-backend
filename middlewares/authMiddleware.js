'use strict'
const { handlerResponse } = require('../utils/error-handler')
const { verifyUserToken } = require('./authToken')

// Verify Token
const authentecateUser = (req, res, next) => {
	// const tokens = req.headers.authorization
	const tokens = req.header('Authorization')

	if (!tokens) {
		return handlerResponse(req, res, 401)
	}
	const token = tokens.replace('Bearer ', '')

	// Verify User Token
	verifyUserToken(token, (error, payload) => {
		if (error) {
			return handlerResponse(req, res, 401)
		}
		req.user = payload
		next()
	})
}

module.exports = authentecateUser
