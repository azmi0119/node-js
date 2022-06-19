const mongoose = require('mongoose')

const connectionDB = (DATABASE_URL) => {
	mongoose.connect(DATABASE_URL, {useUnifiedTopology:true, useNewUrlParser: true}).then( ()=> {
		console.log('Database has connected successfully !!')
	}).catch( (err)=> {
		console.log(err)
	})
}


// const connectionDB = ()=> {
// 	mongoose.connect('mongodb://localhost:27017/Mail').then( ()=> {
// 		console.log('Database Connection successfully !!')
// 	}).catch( (err) => {
// 		console.log(err) 
// 	})
// }


module.exports = connectionDB