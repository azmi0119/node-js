const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();
const authentication = require('../middlewares/jwtToken');
const userController = require('../controllers/userController');
const { loginMobileNumber ,verifyOtp,updateUserData,updateUserDataBasic,updateUserDataBasicSecondSteup,updateUserDataBasicThirdSteup,updateuserProfile,deleteImage,id} = require('../validation/user');

router.post('/loginMobileNumber', validator.body(loginMobileNumber), userController.loginMobileNumber);
router.post('/verifyOtp', validator.body(verifyOtp), userController.verifyOtp);
router.put('/updateUserData', validator.body(updateUserData),authentication, userController.updateUserData);
router.put('/updateUserDataBasic', validator.body(updateUserDataBasic),authentication, userController.updateUserDataBasic);
router.put('/updateUserDataBasicSecondSteup', validator.body(updateUserDataBasicSecondSteup),authentication, userController.updateUserDataBasicSecondSteup);
router.put('/updateUserDataBasicThirdSteup', validator.body(updateUserDataBasicThirdSteup),authentication, userController.updateUserDataBasicThirdSteup);
router.put('/updateuserProfile', validator.body(updateuserProfile),authentication, userController.updateuserProfile);
router.delete('/deleteImages', validator.query(deleteImage), authentication, userController.deleteImages);
router.get('/getUserImagebyId', validator.query(id), authentication, userController.getUserImagebyId);
router.get('/getAllUserData', userController.getAllUserData);

module.exports = router;
