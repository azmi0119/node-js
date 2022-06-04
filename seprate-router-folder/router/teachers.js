var express = require('express');
var router = express.Router();


// Get all teachers
router.get('/all', (req, res)=>{
	res.send('All Teachers');
})

// Create Teacher
router.post('/create', (req, res)=>{
	res.send('Create Teachers');
})

// Update Teacher
router.put('/update', (req, res)=>{
	res.send('Update Teachers');
})

// Delete Teachers 
router.delete('/delete', (req, res)=>{
	res.send('Delete Teachers');
})


// export default = router;	// New Trika
module.exports = router;	// Old trika