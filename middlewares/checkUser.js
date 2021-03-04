const User = require("../models/users.model");

/**
 * @description  Check if username or email already exists.
 */

async function checkIfUserExists(username, email) {
	const checkUsername = await User.findOne({ username });
	const checkEmail = await User.findOne({ email });
	return { checkUsername, checkEmail };
}

module.exports = { checkIfUserExists };
