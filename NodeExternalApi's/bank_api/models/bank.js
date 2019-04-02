const mongoose = require('mongoose');

// Bank Schema
const bankSchema = mongoose.Schema({
	personname:{
		type: String,
		
	},
	slipnumbercard:{
		type: String,
		
	},
	address:{
		type: String
	},
	slipnumber:{
		type: String,
		
	},
	feestatus:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Bank = module.exports = mongoose.model('Bank', bankSchema);

// Get Banks
module.exports.getBanks = (callback, limit) => {
	Bank.find(callback).limit(limit);
}

// Get Bank
module.exports.getBankById = (id, callback) => {
	//Bank.findById(id, callback);
	Bank.find({ slipnumber: id },callback);
}
