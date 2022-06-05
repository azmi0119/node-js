var express = require('express')
var router = express.Router()

// import controllers 
var homeController = require('../controllers/homeController.js')
var aboutController = require('../controllers/aboutController.js')
var contactController = require('../controllers/contactController.js')


// Declared routers here 
router.get('/', homeController)
router.get('/about', aboutController)
router.get('/contact', contactController)


// export router
module.exports = router