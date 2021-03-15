const jwt = require('jsonwebtoken')
const moment = require('moment')
const { auth } = require('../config')

// Generate User Token

const userToken = payload => {
  if (!payload) {
    return null
  }

  payload = {
    userId: payload._id,
    username: payload.username,
    email: payload.email,
  }

  // generate access token and expiry date

  const token = jwt.sign(payload, auth.jwt_secret, {
    expiresIn: auth.access_token_life,
  })
  // Expiry time of access token
  expiredAt = moment().add(auth.access_token_life).valueOf()

  return { token, expiredAt }
}

const verifyUserToken = (token, cb) => {
  jwt.verify(token, auth.jwt_secret, cb)
}

const clearAllToken = (req, res) => {}

module.exports = {
  userToken,
  verifyUserToken,
}
