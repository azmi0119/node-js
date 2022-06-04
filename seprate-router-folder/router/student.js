var express = require('express');
var router = express.Router();


// Get all student
router.get('/student/all', (req,res)=>{
	res.send('All Students');
});

// Create student
router.post('/student/create', (req, res) => {
	res.send('Create Students');
})

// Update student
router.put('/student/update', (req, res) => {
	res.send('Update Students');
})

// Delete student
router.delete('/student/delete', function(req, res) {
	res.send('Delete Students');
})

module.exports = router;	// Old trika hai
// export default = router;	New trika hai
