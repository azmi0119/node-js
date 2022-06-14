const express = require('express')
const router = express.Router()


// import controllers 
const crudController = require('../controllers/crudController.js')

router.get('/', crudController.listData);
router.get('/add', crudController.addNew);
router.get('/edit', crudController.editData);

module.exports = router