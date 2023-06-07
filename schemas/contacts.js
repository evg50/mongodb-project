const Joi = require('joi');

const contactsShema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.string().required(),
});

module.exports = contactsShema;
