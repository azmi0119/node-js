const Joi = require('joi');
exports.loginMobileNumber = Joi.object().keys({
    countryCode: Joi.string().required(),
    mobileNumber:Joi.string().required().min(10).max(20),
});

exports.verifyOtp = Joi.object().keys({
    mobileNumber:Joi.string().required().min(10).max(20),
    otp: Joi.string().required()
});

exports.updateUserData = Joi.object().keys({
    dateOfBirth:Joi.string().required(),
    motherTongue:Joi.string().required(),
    religion:Joi.string().required(),
    location:Joi.string().required()
});

exports.updateUserDataBasic = Joi.object().keys({
    email:Joi.string().email().required(),
    maritalStatus:Joi.string().required(),
    height:Joi.string().required(),
    caster:Joi.string().required(),
    birthStar:Joi.string().required(),
    disabled:Joi.boolean().optional().allow(''),
});
exports.updateUserDataBasicSecondSteup = Joi.object().keys({
    education:Joi.string().required(),
    job:Joi.string().required(),
    bio:Joi.string().required()
});
exports.updateUserDataBasicThirdSteup = Joi.object().keys({
    food:Joi.string().required(),
    drinking:Joi.string().required(),
    somking:Joi.string().required(),
    ideolgies:Joi.string().required(),
    hobbies:Joi.array().required().items(Joi.string().required()),
});


exports.updateUserDataBasicThirdSteup = Joi.object().keys({
    food:Joi.string().required(),
    drinking:Joi.string().required(),
    somking:Joi.string().required(),
    ideolgies:Joi.string().required(),
    hobbies:Joi.array().required().items(Joi.string().required()),
});
exports.updateuserProfile = Joi.object().keys({
    refCode:Joi.string().optional().allow(''),
});
exports.id = Joi.object().keys({
id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required()
})

exports.deleteImage = Joi.object().keys({
    url: Joi.string().required(),
    type: Joi.string().valid('image').required(),
});

