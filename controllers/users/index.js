const { registerUser } = require('./registerUser')
const { loginUser } = require('./loginUser')
const { getUsers } = require('./getUsers')
const { getProfile } = require('./getUserProfile')
const { updateProfile } = require('./updateUserProfile')
const { deleteProfile } = require('./deleteUserProfile')
const { forgotPassword } = require('./forgotPassword')
const { resetPassword } = require('./resetPassword')

module.exports = {
	registerUser,
	loginUser,
	getUsers,
	getProfile,
	updateProfile,
	deleteProfile,
	forgotPassword,
	resetPassword,
}
