const contactsOperations = require('../../models/contact');
const createError = require('http-errors');

const putById = async (req, res, next) => {
	const { id } = req.params;
	const contact = await contactsOperations.getContactById(id);
	if (!contact) {
		console.log('no contact');
		throw createError(404, `product with id=${id} not found`);
	}

	const result = await contactsOperations.updateContact(id, req.body);
	console.log(result);

	const updateContact = await contactsOperations.getContactById(id);

	res.json(updateContact);
};

module.exports = putById;
