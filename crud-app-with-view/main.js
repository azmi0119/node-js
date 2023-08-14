// import here packages
 
// configure .env file inside main.js file 
require("dotenv").config();
// import here express.js framework
const express = require('express');
const app = express()
// import here mongoos package 
const mongoose = require('mongoose');
// import here express-session for maintaining the session 
const session = require('express-session');

// Database connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true
}).then( ()=> {
	console.log("Database connection sucessfully stablished !")
}).catch( (err) => {
	console.log("Sorry ! Database connection failed !")
})
//Create Middleware 

// Create middleware for including static files like css 
app.use('/assets', express.static('assets'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(
    session({
        secret:"my secret key",
        saveUninitialized:true,
        resave:false,
    })
);


// another middleware
// app.use((req,res,next)=>{
//     res.locals.message = req.locals.message;
//     delete req.session.message;
//     next();
// });

// create middleware for set the upload file as static , for showing image
app.use(express.static('uploads'));

// prfix of routes
app.use("", require("./routes/routes"));

// Define here your template engine
app.set('view engine','ejs');

app.listen(5000, ()=>{
    console.log('Server Started ');
});