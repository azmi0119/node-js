var express = require('express')
var app = express()
var path = require('path')

// import web.js file for router
var web = require('./routes/web.js')
app.use('/', web);

// set template engine
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, './views'))

app.listen(8000, () => {
	console.log('Server has started !!!')
})