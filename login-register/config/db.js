var mongoose = require('mongoose')
const DATABASE_URL = 'mongodb://localhost:27017/sessionLogin';

const connectionDB = (DATABASE_URL)=> {
	mongoose.connect(DATABASE_URL).then( ()=> {
		console.log('Database Connection successfully !!')
	}).catch( (err) => {
		console.log(err) 
	})
} 

module.exports = connectionDB