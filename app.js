//	'mongodb + srv://f1evgeniy4:Fb7JWGH2Nkrd3DT@cluster0.xgccs2z.mongodb.net/';

//	'mongodb+srv://m0984401807:Fb7JWGH2Nkrd3DT@cluster0.vkivpag.mongodb.net/';

// 'Fb7JWGH2Nkrd3DT';

const DB_HOST =
	'mongodb+srv://m0984401807:Fb7JWGH2Nkrd3DT@cluster0.vkivpag.mongodb.net/online_shop?retryWrites=true&w=majority';

const mongoose = require('mongoose');

mongoose
	.connect(DB_HOST)
	.then(() => console.log('database connect'))
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	}); // connect  to base
