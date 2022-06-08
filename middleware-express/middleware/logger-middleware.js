var myLogger = (req, res, next) => {
	console.log('You have loggin with middleware !!')
	next()
}

module.exports = myLogger 