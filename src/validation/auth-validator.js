import Joi from "joi";

export const registerSchema = Joi.object({
	firstName: Joi.string().trim().required(),
	lastName: Joi.string().trim().required(),
	email: Joi.string()
		.trim()
		.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,15}$/)
		.required(),
	phone: Joi.string()
		.pattern(/^[0-9]{10}$/)
		.required(),
	password: Joi.string()
		.pattern(/^[a-zA-Z0-9]{6,30}$/)
		.trim()
		.required(),
	confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});
