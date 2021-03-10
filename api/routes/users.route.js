const { Router } = require('express')
// const authentecateUser = require('../../middlewares/authMiddleware')

// ANCHOR Export to index,.js api file

const {
	registerUser,
	loginUser,
	getUsers,
	getProfile,
	updateProfile,
	deleteProfile,
} = require('../../controllers/users')

const router = Router()

router.route('/register').post(registerUser)
router.route('/users').get(getUsers)
router.route('/users/:id').get(getProfile)
router.route('/auth/login').post(loginUser)
router.route('/auth/user/:id').put(updateProfile)
router.route('/auth/user/:id').delete(deleteProfile)

module.exports = router
