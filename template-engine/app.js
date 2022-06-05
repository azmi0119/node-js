var express = require('express')
var app = express()

// set template engine
app.set('view engine', 'ejs')

// import route/web.js file and access all routes 
web = require('./routes/web.js')

// use all route that are defined into web.js file 
app.use('/', web)
app.use('profile', web)
 

app.listen(8000, ()=> {
	console.log('Server has started !!')
})