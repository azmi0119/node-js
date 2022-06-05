// import { join } from 'path'
var path = require('path')

const homeController = (req, res) => {
	// console.log('homeController');
	// res.send('Comming from homeController');
	res.sendFile(path.join(process.cwd(), 'views', 'index.html'));

}

module.exports = homeController