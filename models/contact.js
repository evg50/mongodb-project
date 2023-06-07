const { Schema, model } = require('mongoose');

const contactShema = Schema({
	name: String,
	phone: String,
	email: String,
});

const Contact = model('contact', contactShema);

module.exports = Contact;
