var express = require('express')
var app = express()

// include router here 
web = require('./routes/web.js')

// set template engine
app. set('view engine', 'ejs')

// include middleware 
var underContruction = require('./middleware/under-construction.js')
app.use(underContruction)

// use routes 
app.use('/', web)

app.listen(8000, ()=> {
	console.log('Server has started !!')
})