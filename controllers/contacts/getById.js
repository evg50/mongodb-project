const createError = require('http-errors');
const contactsOperations = require('../../models/contact');
const getById = async (req, res, next) => {
	const { id } = req.params;

	const contact = await contactsOperations.getContactById(id);
	if (!contact) {
		console.log('no contact');
		throw createError(404, `product with id=${id} not found`);
	}
	res.json(contact);
};
module.exports = getById;
