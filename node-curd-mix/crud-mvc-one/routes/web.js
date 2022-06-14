var express = require('express')
var router = express.Router()

// import here controller 
userController = require('../controllers/userController.js')

router.get('/', userController.userList)
router.get('/register', userController.addUser)
router.post('/register-user', userController.storeUser)
router.get('/edit/:id', userController.eidtUser)

 
module.exports = router

