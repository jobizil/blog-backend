const Joi = require("joi");

// User Register Validation
const registerUserValidation = (payload) => {
	const userRegisterSchema = Joi.object({
		username: Joi.string().min(3).required().trim().max(20),
		email: Joi.string()
			.lowercase()
			.max(100)
			.email({ minDomainSegments: 2 })
			.required()
			.trim(),
		password: Joi.string()
			.min(6)
			.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
	});
	return userRegisterSchema.validate(payload);
};

// User Login Validation
const loginUserValidation = (payload) => {
	const userLoginSchema = Joi.object({
		email: Joi.string()
			.lowercase()
			.max(100)
			.email({ minDomainSegments: 2 })
			.required()
			.trim(),
		password: Joi.string()
			.min(6)
			.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
	});
	return userLoginSchema.validate(payload);
};

module.exports = { registerUserValidation, loginUserValidation };
