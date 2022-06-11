class studentController {
	static get_session_info = (req, res) => {
		console.log(req.session)					// request for session
		console.log(req.session.id)					// get sessin id 
		console.log(req.cookie)						// get session cookies
		console.log(req.cookie.maxAge)				// get session expiry time
		console.log(req.cookie.originalMaxAge)		// get default expiry time 
		console.log(req.session.ID)					// get session ID

		res.send('Sessin Get Info ......')
	}
}


// module.exports = studentController
export default studentController