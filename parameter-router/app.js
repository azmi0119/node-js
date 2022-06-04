var express = require('express');
var app = express();

app.get('/single/:id', (req, res) => {
	console.log(req.params.id);
	res.send(`Single string argument pass inside url !! = ${req.params.id}`);
})

app.get('/product/:category/:id', (req, res) => {
	console.log(req.params);
	// You can write like this 
	// res.send(`Product category = ${req.params.category} and Product Id = ${req.params.id}`)

	// you can also write above line like below line
	const {category, id} = req.params;
	res.send(`Product category = ${category} and Product Id = ${id}`)
})


// you can also pass strings into your urls
app.get('/your/:name/and/age/:age', (req, res) => {
	console.log(req.params);
	// you can also write above line like below line
	const {name, age} = req.params;
	res.send(`Hi your name = ${name} and age = ${age}`)
})

app.get('/train/:from-:to', (req, res) => {
	console.log(req.params)
	const {from, to} = req.params;
	res.send(`My train ${from} to ${to}`);

})

// How to use pramas method 
app.param('id', (req, res, next, id) => {
	console.log(`ID = ${id}`)
	next();
})
app.get('/user/:id', (req, res) => {
	console.log('Param function ID match');
	res.send(`Param id now is match with user/id`)
})

// How to pass multiple value into array with param() function
app.param(['page','id'], (req, res, next, value) => {
	console.log(`It call only one time = ${value}`);
	next();
})
app.get('/book/:page/:id', function(req, res) {
	res.send('Response OK');
})

app.listen(8000, ()=> {
	console.log('Server has started !!');
})