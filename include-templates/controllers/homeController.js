const homeController = (req, res) => {
	res.render('home', {'title' : 'Home'})
}

// export homeController
module.exports = homeController