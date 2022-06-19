const mongoose = require('mongoose')

// import database 
const connectionDB = require('../db/connectiondb.js')


var newSchema = mongoose.Schema({
	name:String,
	email:String, 
	message:String
}) 
 

module.exports = mongoose.model('contacts', newSchema) 