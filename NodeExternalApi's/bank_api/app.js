const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
	  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
	  return res.status(200).json({});
	}
	next();
  });

Bank =require('./models/bank');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bank_api');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/banks ');
});


app.get('/api/banks', (req, res) => {
	Bank.getBanks((err, banks) => {
		if(err){
			throw err;
		}
		res.json(banks);
	});
});

app.get('/api/banks/:id', (req, res) => {
	Bank.getBankById(req.params.id, (err, bank) => {
		if(err){
			throw err;
		}
		res.json(bank);
	});
});

app.post('/api/banks', (req, res) => {
	var bank = req.body;
	Bank.addBank(bank, (err, bank) => {
		if(err){
			throw err;
		}
		res.json(bank);
	});
});

app.put('/api/banks/:_id', (req, res) => {
	var id = req.params._id;
	var bank = req.body;
	Bank.updateBank(id, bank, {}, (err, bank) => {
		if(err){
			throw err;
		}
		res.json(bank);
	});
});

app.delete('/api/banks/:_id', (req, res) => {
	var id = req.params._id;
	Bank.removeBank(id, (err, bank) => {
		if(err){
			throw err;
		}
		res.json(bank);
	});
});

app.listen(10000);
console.log('Running on port 10000...');
