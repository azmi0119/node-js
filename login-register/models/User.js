var mongoose = require('mongoose')
var connectionDB = require('../config/db.js')


var userSchema = new mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId, 
	name : String, 
	email : String, 
	password : String
}, {
	timestamps : true
});

// let users = connectionDB.model('User', userSchema)
let users = connectionDB.model('User', userSchema);

module.exports = users
 