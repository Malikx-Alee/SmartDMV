const mongoose = require('mongoose');

// Police Schema
const policeSchema = mongoose.Schema({
	personname:{
		type: String,
		
	},
	idcard:{
		type:String
	},
	firnumber:{
		type: String,
		
	},
	address:{
		type: String
	},
	carnumber:{
		type: String,
		
	},

	create_date:{
		type: Date,
		default: Date.now
	}
});

const Police = module.exports = mongoose.model('Police', policeSchema);

// Get Polices
module.exports.getPolices = (callback, limit) => {
	Police.find(callback).limit(limit);
}

// Get Police
module.exports.getPoliceById = (id, callback) => {
	//Police.findById(id, callback);
	Police.find({firnumber: id},callback);
}
