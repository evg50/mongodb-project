//	'mongodb + srv://f1evgeniy4:Fb7JWGH2Nkrd3DT@cluster0.xgccs2z.mongodb.net/';

//	'mongodb+srv://m0984401807:Fb7JWGH2Nkrd3DT@cluster0.vkivpag.mongodb.net/';

// 'Fb7JWGH2Nkrd3DT';

const { DB_HOST } = require('./config');

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

mongoose
	.connect(DB_HOST)
	.then(() => app.listen(3000))
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	}); // connect  to base
