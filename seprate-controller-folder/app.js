var express = require('express')
var app = express();

// include routes file here 
var studentRouters = require('./route/student.js');

app.use('/student', studentRouters);


app.listen(8000, function() {
	console.log('Server has started !!')
})