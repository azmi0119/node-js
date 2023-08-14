// include product model 
const {Product} = require('../models/product')
const Category = require('../models/category')
const index = (req, res) => {
	res.status(200).json({
		message : "Go response form product controller"
	})
}

const create = async (req, res) => {
	const category = await Category.findById(req.body.category);
	if(!category) 
		return res.status(404).send('Invalid Category')

    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured
    })

	product = await product.save();

    if(!product) 
    return res.status(500).send('The product cannot be created')

	// res.send(product);
	res.status(200).json({
		message : "Product save successfully !",
		data : product,
		success : true
	})
}

module.exports = {
	index,
	create
} 

