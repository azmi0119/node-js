var express = require('express')
var app = express()

// set template engine
app.set('view engine', 'ejs')

// include here routes 
var web = require('./routes/web.js')

// use here router 
app.use('/', web);

// create port with listen 
app.listen(8000, () => {
	console.log('Server has started !!')
})