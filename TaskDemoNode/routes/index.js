const express = require('express');
const userRoots = require('./user');


const router = express.Router();

router.use('/user', userRoots);


module.exports = router;
