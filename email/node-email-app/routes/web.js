const express = require('express')
const router = express.Router()

// import controllers
const MailController = require('../controllers/MailController.js')

router.get('/', MailController.mailIndex)
router.post('/store-contact', MailController.storeContact)

// export routes
module.exports = router