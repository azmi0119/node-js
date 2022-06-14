const express = require('express')
const app = express()

// set ejs template engine 
app.set('view engine', 'ejs')

// import routers here 
web = require('./routes/web.js')

app.use('/', web)

// listen port
app.listen(8000, ()=> {
	console.log("Server has started !!")
})