var http = require('http');

// http.createServer(function(request, response) {
// 	response.writeHead(200, {'Content-Type' : 'text/plain'});
// 	response.write("Welcome to NodeJs");
// 	response.end();
// }).listen(8080);

// console.log("Server has been started Successfully !");


// You can also write above code like below

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write("You can also write like above code");
	response.end();
}

http.createServer(onRequest).listen(8080);

console.log("Server has been started Successfully !");