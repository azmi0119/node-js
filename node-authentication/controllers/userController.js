const User = require("../models/userModel")
const PasswordReset = require('../models/passwordResetModel')
const bcrypt = require("bcrypt")
const {validationResult } = require("express-validator")
const mailer = require("../helpers/mailer")
const randomstring = require("randomstring")
const { profileEnd, error } = require("console")
const { render } = require("ejs")
 
const userRegister = async (req, res) => {
    try {
        // validate request here 
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Errors",
                errors : errors.array()
            });
        }

        const {name, email, mobile, password } = req.body;
        
        // Check user email already exist or not 
        const isExists = await User.findOne({ email : email })

        if (isExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Password bcrypt here
        const hasPassword = await bcrypt.hash(password, 10);

        const userData = await new User({
            name : name,
            email : email, 
            mobile : mobile,
            password : hasPassword, 
            image : 'image'+req.file.filename
        })

        userData.save();
        
        // send mail 
        const msg = '<p>Hi, '+ userData.name+' Please <a href="http://127.0.0.1:3000/mail-verification?id='+userData._id+'">verify</a></p>';
        mailer.sendMail(email, 'Mail verification', msg);

        return res.status(200).json({
            success : true,
            mesage : 'User register successfully !',
            user : userData
        })

    } catch (error) {
        return res.status(400).json({
            success : false,
            mesage : error.error
        })
    }
}

const mailVerfication = async (req, res) => {
 
    try {
        if(req.query.id == undefined) {
            return res.render('404');
        }

        const user = await User.findOne({ _id : req.query.id });

        if(user.is_verified == 1) {
            return res.json({
                message : "User are already verified !"
            })
        }

        if(user) {
            const updateRecord = await User.updateOne(
                { _id : req.query.id }, 
                { $set : { is_verified : 1 } }
            );

            if(updateRecord) {
                return res.render('mail-verification', {
                    message : "User verification successfully !"
                })
            }
        } else {
            return res.render('404', {
                message : 'User not found !'
            })
        }

    } catch (error) {
        return res.render('404')
    }
}

const sendVerificationMail = async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(404).json({
                success : false,
                message : "Error",
                errors : errors.array()
            })
        }
    
        const email = req.body.email
        const userData = await User.findOne({ email : email });
       
        if(!userData) {
            return res.status(400).json({
                success : false,
                mesage : 'Email is not found, Please signup yourself !'
            })
        }
    
        if(userData.is_verified == 1) {
            return res.status(400).json({
                success : false,
                mesage : 'User already verified, Please login with your credential !'
            })
        }
    
        // send mail verification link
        const msg = '<p>Hi, '+ userData.name+' Please <a href="http://127.0.0.1:3000/mail-verification?id='+userData._id+'">click here</a> to verify your mail !</p>';
        const isVerificationMailSend = mailer.sendMail(email, 'Mail for verification ', msg);
        if(isVerificationMailSend) {
            return res.status(200).json({
                success : true,
                mesage : 'Email verification link has been sent on your mail !'
            })
        }
    } catch (error) {
        return render('404')
    }
}

const forgotPassword = async (req, res)=> {

    try {
        // First validate email 
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(404).json({
                success : false,
                message : "Error",
                errors : errors.array()
            })
        }

        const email = req.body.email
        const userData = await User.findOne({ email : email });
    
        if(!userData) {
            return res.status(400).json({
                success : false,
                mesage : 'Email is not found, Please signup yourself !'
            })
        }

        const randomString = randomstring.generate();

        // send mail for reset password link 
        const msg = '<p>Hi, '+ userData.name+' Please <a href="http://127.0.0.1:3000/reset-password?token='+randomString+'">click here</a> to verify your mail !</p>';
        const isVerificationMailSend = mailer.sendMail(email, 'Mail for reset password', msg);

        // delete previous token behalf of perticular user_id 
        const deletedPreviousToken = await PasswordReset.deleteMany({ user_id : userData._id })
        if(deletedPreviousToken) {
            const resetPassword  = new PasswordReset({
                user_id : userData._id,
                email : userData,
                token : randomString
            })
            await resetPassword.save();
        }

        if(isVerificationMailSend) {
            return res.status(200).json({
                success : true,
                mesage : 'Password reset linke has been sent your mail !'
            })
        }
    } catch (error) {
        return render('404')
    }
}

const resetPassword = async(req, res)=> {
    try {
        const token = req.query.token;
        if(token == undefined) {
            return res.render('404');
        }
        const resetData = await PasswordReset.findOne({ token : token })
        if(!resetData) {
            return res.render('404')
        }
        return res.render('reset-password', { resetData : resetData })
    } catch (error) {
        return render('404')
    }
}

const updatePassword = async(req, res)=> {

    try {
        const { user_id, password, confirm_password } = req.body;
        const resetData = await PasswordReset.findOne({ user_id : user_id })
        if(password != confirm_password) {
            return res.render('reset-password', { 
                resetData : resetData,
                error : 'Password are not match ! Try again'
            })
        }

        const hasPassword = await bcrypt.hash(confirm_password, 10)
        const userData = await User.findByIdAndUpdate({ _id : user_id }, {
            $set: {
                password : hasPassword
            }
        })

        await PasswordReset.deleteMany({ user_id : user_id })
        return res.redirect('/password-success')
    } catch (error) {
        return render('404')
    }
}

const resetPasswordSuccess = async(req, res)=> {
    try {
        return res.render('password-success')
    } catch (error) {
        return render('404')
    }
}

module.exports = {
    userRegister, 
    mailVerfication,
    sendVerificationMail,
    forgotPassword,
    resetPassword,
    updatePassword,
    resetPasswordSuccess
} 