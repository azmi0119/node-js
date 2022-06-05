var express = require('express')
var router = express.Router()

// include homeController 
var homeController = require('../controllers/homeController.js')

router.get('/', homeController)


// export router
module.exports = router