const express = require("express")
const router  = express.Router()

// include here CategoryController.js file
const CategoryController = require('../controllers/CategoryController')

router.get('/', CategoryController.index)
router.get("/:id", CategoryController.single)
router.post('/', CategoryController.create)
router.put('/:id', CategoryController.update)
router.delete("/:id", CategoryController.destroy)

module.exports = router