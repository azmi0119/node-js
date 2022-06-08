var express = require('express')
var router = express.Router()

// import here studentController.js file 
studentController = require('../controllers/studentController.js')

// Note :- Apply middleware on router lavel
// import middleware file here
var myLogger = require('../middleware/logger-middleware.js')

// Now use myLogger middleware 
router.use(myLogger)

router.get('/student', studentController)

module.exports = router