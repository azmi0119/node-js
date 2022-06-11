// var express = require('express')
import express from 'express'
var app = express()
// var session = require('express-session')
import session from 'express-session'

// import web.js file inside app.js file 
// web = require('./routes/web.js')
import web from './routes/web.js'

app.use('/', web)

app.use(session({
	name : 'abdullah', 
	secret : 'abdullahs@chetu.com', 
	resave : false, 
	saveUninitialized : true, 
}))

app.listen(8000, () => {
	console.log('Server has started !!')
})