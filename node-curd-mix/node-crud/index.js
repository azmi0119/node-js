var express = require("express");
var app = express();
var mongoose = require('mongoose');
var User = require('./models/index.js');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/Crud", {useUnifiedTopology:true, useNewUrlParser: true});
var connection = mongoose.connection;

connection.once('open', function() {
	console.log("Connection successfylly done ...");
});

app.set('view engine' , 'ejs'); 

app.get("/", function(req, res) {
	res.render("insert");
});

app.post("/insert", function(req, res) {
	var user = new User({
		name:req.body.name,
		email:req.body.email,
		password:req.body.password
	})
	user.save(()=>{
		res.send("Data inserted");
	})
})

// Fetch data form database
app.get('/show', function(req, res) {
	User.find({}, function(err, result) {
		res.render("show", {users:result});
	})
})

app.get('/delete/:id', async function(req, res) {
	await User.findByIdAndDelete(req.params.id);
	res.redirect('/show');
})

app.listen(8000, function() {
	console.log("Server started on 8000");
});