var http = require('http');
var calculation = require('./calculation');
var custom = require('./custom');
var custom2 = require('./custom2');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write('Addition with own module');
	response.write('\n' + calculation.addition(10, 20) + '\n');
	response.write("Substraction with own module" + '\n');
	response.write(calculation.substraction(20, 10) + '\n');
	response.write("multiplication with own module" + '\n');
	response.write(calculation.multiplication(3, 3) + '\n');
	response.write("division with own module" + '\n');
	response.write(calculation.division(10, 2) + '\n');
	response.write('\n\n' + "Custom Module" + '\n');
	response.write(custom.currentDate()  + '\n');
	response.write(custom.concatenate('Abdullah','Shaikh') + '\n');
	response.write(custom2.myFunctin());

	response.end();
}).listen(4040);

console.log("Server is started !");