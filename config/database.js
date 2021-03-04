const mongoose = require("mongoose");

const { database_uri } = require("./index");
const logger = require("../utils/logger");

async function connectToDatabase() {
	try {
		const options = {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true,
		};
		// Check database env

		let connectionString = await mongoose.connect(database_uri, options);
		logger.log(
			"info",
			`Database connected on ${connectionString.connection.host}.`,
		);
	} catch (error) {
		logger.log("error", `${error.message}`);
		process.exit(1);
	}
}

module.exports = connectToDatabase;
