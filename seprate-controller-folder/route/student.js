var express = require('express');
var router = express.Router();
var studentAll = require('../controllers/studentController.js')

// Get all student
router.get('/all', studentAll);


module.exports = router