var express = require('express')
var app = express();

// import route folder with web.js file 
web = require('./route/web.js');

// import static file 
app.use(express.static('public'))

app.use('/', web);


app.listen(8000, ()=>{
	console.log('Server is started !!!')
})