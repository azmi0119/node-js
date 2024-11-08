const express = require('express');
const router = express.Router();

const multer = require("multer")
const path = require("path")
const userController = require("../controllers/userController")
const { registerValidator, sendVerificationMail } = require("../helpers/validation")
router.use(express.json())
 
const storage = multer.diskStorage({ 
    destination : function(req, file, cb) {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, path.join(__dirname, '../public/images'))
        }
    }, 
    filename : function(req, file, cb) {
        const fileName = Date.now()+'-'+file.originalname
        cb(null, fileName)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}  

const upload = multer({ 
    storage : storage, 
    fileFilter : fileFilter
})

router.post("/register", upload.single("image"), registerValidator, userController.userRegister);
router.post("/send-verification-mail", sendVerificationMail, userController.sendVerificationMail);
router.post('/forgot-password', sendVerificationMail, userController.forgotPassword)

module.exports = router 