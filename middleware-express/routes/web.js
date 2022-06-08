var express = require('express')
var router = express.Router()

// include homeController 
var homeController = require('../controllers/homeController.js')
var aboutController = require('../controllers/aboutController.js')

router.get('/', homeController)
router.get('/about', aboutController)


// export router
module.exports = router