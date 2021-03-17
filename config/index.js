require('dotenv').config({ veborse: true })
/**
 **  All envs can be added and exported here
 */
module.exports = {
	webport: process.env.PORT,
	env: process.env.NODE_ENV,
	origin: process.env.ORIGIN,
	database_uri: process.env.DB_URI,
	database_uri_test: process.env.DB_URI_TEST,
	mongo_options: {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	mailAuth: { user_mail: process.env.MAIL_USER, user_pass: process.env.MAIL_PASS },
	auth: {
		jwt_secret: process.env.JWT_SECRET,
		access_token_life: process.env.ACCESS_TOKEN_LIFE,
		cookie_secret: process.env.COOKIE_SECRET,
		sendgridKey: process.env.SENDGRID_API_KEY,
	},
}
