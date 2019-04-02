const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//app.use(bodyParser.json());
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


Police =require('./models/police');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/police_api');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/polices ');
});


app.get('/api/polices', (req, res) => {
	Police.getPolices((err, polices) => {
		if(err){
			throw err;
		}
		res.json(polices);
	});
});

app.get('/api/polices/:id', (req, res) => {
	Police.getPoliceById(req.params.id, (err, police) => {
		if(err){
			throw err;
		}
		res.json(police);
	});
});


app.listen(10002);
console.log('Running on port 10002...');
