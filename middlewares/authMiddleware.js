// eslint-disable-next-line strict
'use strict'
const { handlerResponse } = require('../utils/error-handler')
const { verifyUserToken } = require('./authToken')

// Verify Token
const authentecateUser = (req, res, next) => {
  const tokens = req.headers.Authorization
  if (!tokens) {
    return handlerResponse(req, res, 401)
  }

  token = token.replace('Bearer', '')
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
