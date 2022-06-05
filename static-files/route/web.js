var express = require('express')
var route = express.Router();

// import homeController 
var homeControllers = require('../controllers/homeController.js')

route.get('/home', homeControllers)

module.exports = route
