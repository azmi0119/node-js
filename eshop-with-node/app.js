const express = require("express")
const app = express()
require('dotenv/config');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


//middleware
app.use(bodyParser.json());
// app.use(morgan('tiny'));


// include all routes file here
const categoryRouter = require("./routes/categories")
const productRouter = require("./routes/products")

const api = process.env.APP_URL
 
// use here route midleware
app.use(`${api}/categories`, categoryRouter);
app.use(`${api}/product`, productRouter);

// write here database coonection code
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_STRING, {
	useNewUrlParser : true
}).then( ()=> {
	console.log("Database connection is ready !")
}).catch( (err)=> {
	console.log("Database connection not ready " + err)
})


app.listen(process.env.PORT, ()=> { 
	console.log("Server has started successfully on "+process.env.PORT)
})