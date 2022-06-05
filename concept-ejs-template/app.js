var express = require('express')
var app = express()

// include here template engine
app.set('view engine', 'ejs')

// include here routers
web = require('./routes/web.js')


// User here routers 
app.use('/', web)

// create post 
app.listen(8000, ()=> {
	console.log('Server has started !!')
})