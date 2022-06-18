const express = require('express');
const app = express();


app.get('/', function(request, response){
	response.send('Hello Home page');
});

app.listen(3000, console.log('Server Started'));