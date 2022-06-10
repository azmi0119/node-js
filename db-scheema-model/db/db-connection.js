const mongoose = require('mongoose')

// Type - 1

// const connectionDB = ()=> {
// 	mongoose.connect('mongodb://localhost:27017/test').then( ()=> {
// 		console.log('Database Connection successfully !!')
// 	}).catch( (err) => {
// 		console.log(err)
// 	})
// }

// Type - 2

const connectionDB = (DATABASE_URL)=> {
	mongoose.connect(DATABASE_URL).then( ()=> {
		console.log('Database Connection successfully !!')
	}).catch( (err) => {
		console.log(err)
	})
}


module.exports = connectionDB