var express = require("express");
var app = express();

// Get method first type
app.get('/', (req, res)=> {
	res.send("Hello home URL");
})

// Get second type
app.get('/second', function(req, res) {
	res.send("Second Type route");
})

// // accept all typ string as url 
// app.all('*', (req, res) => {
// 	res.send("Page not found !");
// })

// accept all string after api/---
app.all('/api/*', (req, res)=> {
	res.send('Pass any string after api ---');
})

// callback first example
app.get('/cbexample1', (req, res) => {
	res.send('Single callback cbexample1');
})

// More than one callback function
app.get('/cbexample2', (req, res, next)=> {
	console.log('First callback function');
	next();
}, (req, res)=> {
	res.send("More than one callback function");
	console.log("Second callback function");
})

// An array of callback
const cb1 = (req, res, next) => {
	console.log("First Callback execute !!");
	next();
}

const cb2 = (req, res, next) => {
	console.log('Secod callback execute !!');
	next();
}

const cb3 = (req, res, next) => {
	console.log('Third callback execute !!');
	next();
}
app.get('/arrcallback', [cb1, cb2, cb3]);


// Combination of independent foundation and array of functions
const comb1 = (req, res, next) => {
	console.log('First combination execute !!');
	next();
}

const comb2 = (req, res, next) => {
	console.log('Secod combination execute !!');
	next();
}

const comb3 = (req, res, next) => {
	console.log('Third combination execute !!');
	next();
}

app.get('/morecombination', [comb1, comb2, comb3], (req, res, next) => {
	console.log('Fourth combination callback function execute !!');
	next();
}, (req, res, next) => {
	console.log('Fifth combination callback function execute !!');
	next();
}, (req, res) => {
	res.send('combination of independent foundation and array of function');
})


// Chained route callback
// app.route('/common')
// 	.get((req, res) => {
// 		res.send('All student');
// 	})
// 	.post((req, res)=>{
// 		res.send('Add new student');
// 	})
// 	.put(function(req, res){
// 		res.send('Update student');
// 	})
// 	.delete(function(req, res) {
// 		res.send('Delete student');
// 	})




// create server
app.listen(3000, ()=> {
	console.log("Sever is started !!");
})