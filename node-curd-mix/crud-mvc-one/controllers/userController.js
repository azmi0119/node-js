// import model 
var User = require('../models/User.js');
 
var bodyParser = require("body-parser");

const userList = (req, res) => { 

	User.find((err, docs) => {
        if (!err) {
            res.render("home", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}

const addUser = (req, res) => {
	res.render('registration')
}

const storeUser = (req, res) => {
	var user = new User({
		name:req.body.name,
		phone:req.body.phone,
		email:req.body.email,
		password:req.body.password
	})
	user.save(()=>{
		return res.redirect('/');
	})
}

const eidtUser = (req, res) => {
	res.render('edit')
}

module.exports = {
	userList,
	addUser,
	storeUser,
	eidtUser
} 