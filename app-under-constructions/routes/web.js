var express = require('express')
var router = express.Router()

// include here controller 
homeController = require('../controllers/homeController.js')
aboutController = require('../controllers/aboutController.js')
newsController = require('../controllers/newsController.js')
contactController = require('../controllers/contactController.js')


router.get('/', homeController)
router.get('/about', aboutController)
router.get('/news', newsController)
router.get('/contact', contactController)

module.exports = router
// module.exports = underContruction