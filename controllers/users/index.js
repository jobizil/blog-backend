const { registerUser } = require('./registerUser')
const { loginUser } = require('./loginUser')
const { getUsers } = require('./getUsers')
const { getProfile } = require('./getUserProfile')
const { updateProfile } = require('./updateUserProfile')
const { deleteProfile } = require('./deleteUserProfile')
const { forgotPassword } = require('./forgotPassword')

module.exports = {
	registerUser,
	loginUser,
	getUsers,
	getProfile,
	updateProfile,
	deleteProfile,
	forgotPassword,
}
