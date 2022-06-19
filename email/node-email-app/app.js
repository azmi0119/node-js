const express = require('express')
const app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

// import routes
web = require('./routes/web.js')

// import database connection file

// import db from db/connectiondb.js file 
const connectionDB = require('./db/connectiondb.js')

// // create database contacts
const DATABASE_URL = 'mongodb://localhost:27017/Mail';

// call connectionDB function that are define in db/connectiondb.js file 
connectionDB(DATABASE_URL)

app.use('/', web)


// set template engine
app.set('view engine', 'ejs')


// Create ports 
app.listen(8000, ()=> {
	console.log('Server has started !!!')
})