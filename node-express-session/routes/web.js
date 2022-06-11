// var express = require('express')
import express from 'express'
var routers = express.Router()

// import studentController.js file inside web.js file 
// var studentController = require('../controllers/studentController.js')
import studentController from '../controllers/studentController.js'

// create routes 
routers.get('/', studentController)

// module.exports = routers
export default routers