var express = require('express')
var app = express()

// import routers here
web = require('./routes/web.js')
student = require('./routes/student.js')

// Include middleware 
middleware = require('./middleware/logger-middleware.js')

// Include middleware at Application Lavel
// app.use(middleware)
app.use('/about', middleware)	// You can apply the middleware on a particular path

// Declared home route
app.use('/', web);
app.use('/', student);


// set ejs template engin
app.set('view engine', 'ejs')

// run listen PORT
app.listen(8000, () => {
	console.log('Server has started !!')
})
