var express = require('express')
var router = express.Router()

// import all controllers 
homeController = require('../controllers/homeController.js');
aboutController = require('../controllers/aboutController.js')

router.get('/', homeController)
router.get('/about', aboutController)

module.exports = router