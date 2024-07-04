const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,
    },
    role: {
        type: String,
        default:"normal"
    },
    password: {
        type: String,
        require: true,
    },
    profilePhoto: {
        type: String,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    otp: {
        type: Number,
        require:true
    },
    time: {
        type: String,
        default: new Date().toLocaleTimeString()
    },
    token: {
        type: String,
        require: true,
    },
    active: {
        type: Boolean,
       default:false
    },
    profileLock: {
        type: Boolean,
       default:false
    },
    online: {
        type: Boolean,
       default:false
    },
    twofactorauth: {
        type: Boolean,
        default:false
    },
    openingType: {
        type: String,
        default:"email"
    },
    lastModify: {
        type: String,
        default:"no"
    },
    interest: {
        type: Array,
    },
});

const user = mongoose.model('userinfo', userSchema);

module.exports = user;


