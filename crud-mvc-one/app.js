var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require("body-parser")
var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Crud", {useUnifiedTopology:true, useNewUrlParser: true});
var connection = mongoose.connection;

connection.once('open', function() {
	console.log("Connection successfylly done ...");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// import web.js file for router
var web = require('./routes/web.js')
app.use('/', web);

// set template engine
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, './views'))

app.listen(8000, () => {
	console.log('Server has started !!!')
}) 