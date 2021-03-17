const { Router } = require('express')
const authentecateUser = require('../../middlewares/authMiddleware')

// ANCHOR Export to index,.js api file

const {
	registerUser,
	loginUser,
	getUsers,
	getProfile,
	updateProfile,
	deleteProfile,
	forgotPassword,
	resetPassword,
	updatePassword,
} = require('../../controllers/users')

const router = Router()

router.route('/register').post(registerUser)
router.route('/users').get(getUsers)
router.route('/auth/login').post(loginUser)
router.route('/auth/forgot-password').post(forgotPassword)
router.route('/auth/reset/:resetToken').put(resetPassword)
router.use(authentecateUser)
router.route('/user/:id').get(getProfile)
router.route('/auth/user/:id').put(updateProfile)
router.route('/auth/user/update-password/:id').put(updatePassword)
router.route('/auth/user/:id').delete(deleteProfile)

module.exports = router
