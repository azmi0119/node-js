const Jwt = require('jsonwebtoken');
const { toLower, size, compact } = require('lodash');
const moment = require('moment');
const { user } = require('../models');
const commonHelper = require('../helpers/common');
const utils = require('../utils/apiHelper');
const env = require('../config');
const fs = require('fs');
const privateKey = env.JWTOKEN;
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const logger = require('../helpers/logger');

exports.loginMobileNumber = async (payloadData, res) => { 
    const params = payloadData.body;
        const checkMobile = await utils.getData(user, {
        query: {
            countryCode: params.countryCode,
            mobileNumber: params.mobileNumber,
            isDeleted: false,
            password: { $ne: null }
        }
    });
    if (!size(checkMobile)) {
        params.otp = 12345;
        await utils.saveData(user, params);
        return sendSuccessMessage('Otp Sent to Number ', {}, res);
    }
    else {
        return sendErorMessage('user Already Exist . Please Login Using Password or Pin.', {}, res);
    }
};
exports.verifyOtp = async (payloadData, res) => {
    const params = payloadData.body;
    const checkOtp = await utils.getData(user, {
        query: {
            mobileNumber: params.mobileNumber,
            otp: params.otp,
            isDeleted: false,
        }
    });
    if (!size(checkOtp)) {
        return sendErorMessage('Otp Not Valid', {}, res);
    }
    else {
        let userdata=await utils.updateData(user, { mobileNumber: params.mobileNumber }, { isOtpVerified: true });
        const tokenData = {
            mobileNumber: checkOtp[0].mobileNumber,
            _id: checkOtp[0]._id,
            date: moment().toDate(),
        };
        const token = Jwt.sign(tokenData, privateKey, { expiresIn: '90d' });
        const data = {
            token,
            userdata,
        };
        return sendSuccessMessage('Otp Verified Successfully', data, res);
    }
    
};
exports.updateUserData = async (payloadData, res) => {
    const params = payloadData.body;    
    let data = await utils.updateData(user, { _id: payloadData.userData._id }, params);
    return sendSuccessMessage('success', data, res);
};


exports.updateUserDataBasic = async (payloadData, res) => {
    const params = payloadData.body;    
    let data = await utils.updateData(user, { _id: payloadData.userData._id }, params);
    return sendSuccessMessage('success', data, res);
};
exports.updateUserDataBasicSecondSteup = async (payloadData, res) => {
    const params = payloadData.body;    
    let data = await utils.updateData(user, { _id: payloadData.userData._id }, params);
    return sendSuccessMessage('success', data, res);
};

exports.updateUserDataBasicThirdSteup = async (payloadData, res) => {
    const params = payloadData.body;    
    let data = await utils.updateData(user, { _id: payloadData.userData._id }, params);
    return sendSuccessMessage('success', data, res);
};

exports.updateuserProfile = async (payloadData, res) => {
    const params = payloadData.body;  
    let filesName = [];
    if (payloadData && payloadData.files && payloadData.files.image) {
        const image = Array.isArray(payloadData.files.image)? payloadData.files.image: compact([payloadData.files.image]);
        for (let i = 0; i < image.length; i++) {
          let name = Math.ceil(Math.random() * 1000000000000) + image[i].name;
           filesName.push(name);
           params.image = filesName;
           await image[i].mv('./files/' + name);
         
        }
      }
    let data = await utils.updateData(user, { _id: payloadData.userData._id }, params);
    return sendSuccessMessage('success', data, res);
};

exports.deleteImages = async (payloadData, res) => {
    const pararms = payloadData.query;
    let obj = {};
    let str = pararms.url;
    obj[pararms.type] = str;
    await utils.updateData(user, { _id: pararms.id },
        { "$pull": obj },
    );
    return sendSuccessMessage('success', {}, res);
};


exports.getUserImagebyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(user, {
      query: { _id: pararms.id, isDeleted: false },
    });
    data = data[0];
    for(let i=0;i<data.image.length;i++){
        data.image[i] = `http://${payloadData.hostname}:${env.PORT}/files/${data.image[i]}`
    }
    return sendSuccessMessage("success", data, res);
  };

  exports.getAllUserData = async (payloadData, res) => {
    
    const params = payloadData.query;
    let query = { isDeleted: false };
    let data = await utils.getData(user, {
        query: query,

    });
    return sendSuccessMessage('success', data, res);
};
