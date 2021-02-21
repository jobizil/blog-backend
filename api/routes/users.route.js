const { Router } = require('express')

// ANCHOR Export to index,.js api file

const { registerUser } = require('../../controllers/users/registerUser')

const router = Router()

router.route('/users').post(registerUser)

module.exports = router
