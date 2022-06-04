var express = require('express');		// Old trika hai
// import express from 'express';			// New trika hai
var app = express();

// import your student.js and teacher.js router file
var studentRouters = require('./router/student.js');
var teacherRouters = require('./router/teachers.js');

app.use('/vidyarthi', studentRouters);
app.use('/teacher', teacherRouters);

app.listen(8000, ()=>{
	console.log('Server is started on 8000');
})