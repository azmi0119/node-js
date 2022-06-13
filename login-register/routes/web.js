var express = require('express')
var router = express.Router()

// import here controller 
userController = require('../controllers/userController.js')

router.get('/home', (req, res) => {
	res.render('home')
})

router.get('/', (req, res) => {
	res.render('login')
})

router.get('/register', userController.addUser)

module.exports = router

