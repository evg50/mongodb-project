const express = require('express');

const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');
const { contactsShema } = require('../../schemas');
const valideteMiddleware = validation(contactsShema);

router.get('/', ctrlWrapper(ctrl.getAll));

// router.get('/:id', ctrlWrapper(ctrl.getById));

router.post('/', valideteMiddleware, ctrlWrapper(ctrl.add));

// router.delete('/:id', ctrlWrapper(ctrl.deleteById));

// router.put('/:id', valideteMiddleware, ctrlWrapper(ctrl.putById));

module.exports = router;
