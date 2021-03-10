const { registerUser } = require('./registerUser')
const { loginUser } = require('./loginUser')
const { getUsers } = require('./getUsers')
const { getProfile } = require('./getUserProfile')
const { updateProfile } = require('./updateUserProfile')
const { deleteProfile } = require('./deleteUserProfile')

module.exports = {
	registerUser,
	loginUser,
	getUsers,
	getProfile,
	updateProfile,
	deleteProfile,
}
