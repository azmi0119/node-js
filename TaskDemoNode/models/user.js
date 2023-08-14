const { string } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = new Schema({
    mobileNumber: { type: String, default: null },
    contryCode:{ type: String, default: null },
    password: { type: String, hide: true },
    otp:{ type: String,  default: null },
    isOtpVerified:{ type: Boolean,  default: false },
    dateOfBirth:{ type: String,  default: null },
    motherTongue:{ type: String,  default: null },
    religion:{ type: String,  default: null },
    location:{ type: String,  default: null },
    email:{type:String, default:null},
    maritalStatus:{type:String, default:null},
    height:{type: String, default:null},
    caster:{type: String, default:null},
    birthStar:{type: String, default:null},
    disabled:{type:Boolean,default:false},
    education:{type: String, default:null},
    job:{type: String, default:null},
    bio:{type: String, default:null},
    food:{type:String, default:null},
    drinking:{type:String,default:null},
    somking:{type:String, default:null},
    ideolgies:{type:String,default:null},
    hobbies:[{type:String , default:null}],
    image:[{type:String , default:null}],
    refCode:{type:String, default:null},
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});

user.set('toObject');
user.set('toJSON');
module.exports = mongoose.model('user', user);
