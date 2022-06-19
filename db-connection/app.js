const express = require('express')
const app = express()
const mongoose = require('mongoose')


// mongoose.connect('mongodb://localhost:27017/test').then( ()=> {
// 	console.log('Database connected successfully !!')
// }); 

// import db from db/connectiondb.js file 
const connectionDB = require('./db/connectiondb.js')

// create database constant 
const DATABASE_URL = 'mongodb://localhost:27017/test';

// call connectionDB function that are define in db/connectiondb.js file 
connectionDB(DATABASE_URL)

app.listen(8000, ()=> {
	console.log('Server has started !!')
}) 