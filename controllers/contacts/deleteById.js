const contactsOperations = require('../../models/contact');
const createError = require('http-errors');
const deleteById = async (req, res, next) => {
	const { id } = req.params;
	const result = await contactsOperations.removeContact(id);
	if (!result) {
		throw createError(400, "don't succes delete");
	}
	res.json(result);
};
module.exports = deleteById;
