const studentController = (req, res) => {
	console.log('Middleware apply on router level !!')
	res.render('student-route-level-middleware')
}

module.exports = studentController