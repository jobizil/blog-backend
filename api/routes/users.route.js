const { Router } = require('express')

// ANCHOR Export to index,.js api file

const { registerUser, loginUser, updateProfile } = require('../../controllers/users/')

const router = Router()

router.route('/users').post(registerUser)
router.route('/auth/users').post(loginUser)
router.route('/auth/users/:id').put(updateProfile)

module.exports = router
