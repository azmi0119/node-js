// include categories model
const CategoryModel = require('../models/category')

const index = async (req, res) => { 
	const CategoryList = await CategoryModel.find();
	if(!CategoryList) {
		return res.send(404).json({
			message : 'Data are not faund !'
		})
	}
	res.status(200).json({
		message : "Data are retirive successfully !",
		data : CategoryList
	})
}

const single = async (req, res) => {
	const category = await CategoryModel.findById(req.params.id)
	if(!category)
		res.status(404).json({
			message : "Category not found by ID, Please try again !"
		})
	res.status(200).json({
		message : "Category found successfully by ID",
		data : category
	})
}

const create = async (req, res) => {
	let category = new CategoryModel({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await category.save();

    if(!category)
    return res.status(400).send('the category cannot be created!')

    res.send(category); 
}

const update = async (req, res) => {
	const category = await CategoryModel.findByIdAndUpdate(
		req.params.id,
		{
			name : req.body.name,
			icon : req.body.icon,
			color : req.body.color
		},
		{ new : true }
	)
	if(!category)
		res.status(500).json({
			message : "Category not updated !"
		})
	res.status(200).json({
		message : "Category updated successfully !",
		data : category
	})
}

const destroy = (req, res) => {
	CategoryModel.findByIdAndRemove(req.params.id).then(category =>{
        if(category) {
            return res.status(200).json({
                success: true, message: 'the category is deleted!'
            })
        } else {
            return res.status(404).json({
                success: false, 
                message: "category not found!"
            })
        }
    }).catch(err => {
        return res.status(500).json({
            success: false, error: err
        }) 
    })
}

module.exports = {
	index,
	single,
	create,
	update,
	destroy
}