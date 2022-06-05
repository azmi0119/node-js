const homeController = (req, res) => {
	// pass value on view template form controller
	var data = {
		'name' : 'Abdulah'
	}
	res.render('index', data);
}

// export homeController
module.exports = homeController