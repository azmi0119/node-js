// import model 
var User = require('../models/User.js');

const addUser = (req, res) => {
	res.render('registration')
}

module.exports = {
	addUser
}