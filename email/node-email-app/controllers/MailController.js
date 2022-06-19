// import model into controller
var Contact = require('../models/Contact.js');
var bodyParser = require("body-parser");


const mailIndex = (req, res) => {
	res.render('email')
}

const storeContact = (req, res) => {
	var contact = new Contact({
		name:req.body.name,
		email:req.body.email,
		message:req.body.message
	})
	contact.save(()=>{
		return res.redirect('/');
	}) 
}

module.exports = {
	mailIndex,
	storeContact
}