const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require("../modles/userinfo");
const jwt = require('jsonwebtoken');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const SECRET_KEY = process.env.SECRET_KEY;
const nodemailer = require('nodemailer');
// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'theabhik2020@gmail.com',
            pass: process.env.password
        }
    }
);


// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};
transporter.use('compile', hbs(handlebarOptions))

// use a template file with nodemailer

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(401).json({ message: "Invalid" });
        } else {
            const checkEmail = await user.findOne({ email });
            if (checkEmail) {
                res.status(401).json({ message: "This email id alreay use" })
            } else {
                let hashPwd = await bcrypt.hash(password, 10);
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 6; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                const data = new user({ name, email, password: hashPwd, otp: OTP, token: '' });
                data.save().then(async () => {
                    const token = jwt.sign({ _id: data._id }, SECRET_KEY);
                    const updateToken = await user.updateOne({ _id: data._id }, { token: token });
                    if (updateToken) {
                        var mailOptions = {
                            from: '"Adebola" theabhik2020@gmail.com', // sender address
                            to: email, // list of receivers
                            subject: 'Welcome!',
                            template: 'email', // the name of the template file i.e email.handlebars
                            context: {
                                otp: OTP
                            }
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                return console.log(error);
                            }
                            res.status(200).json({ message: "Data Save" })
                        });
                    } else {
                        res.status(401).json({ message: `Data not Save` })
                    }
                }).catch((error) => {
                    res.status(401).json({ message: `Data not Save ${error}` })
                });
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/verifiedAccount", async (req, res) => {
    const { email, otp } = req.body;
   try {
    if (!email || !otp) {
        res.status(401).json({ message: `Invalid` })
    } else {
        const getData = await user.findOne({ email });
        if (getData) {
            const getOtp = getData.otp;
            if (otp === getOtp) {
                const updateStatus = await user.updateOne({ _id: getData._id }, {
                    active: true
                });
                if (updateStatus) {
                    res.status(200).json({ message: `account activeted` });
                    var mailOptions = {
                        from: '"Adebola" theabhik2020@gmail.com', // sender address
                        to: email, // list of receivers
                        subject: 'Welcome!',
                        template: 'active', // the name of the template file i.e email.handlebars
                       
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            return console.log(error);
                        }
                    });
                } else {
                    res.status(401).json({ message: `account not activeted` })
                }
            } else {
                res.status(401).json({ message: `wrong otp` })
            }
        } else {
            res.status(401).json({ message: `Invalid email id` })
        }
    }
   } catch (error) {
    res.status(500).send(error);
   }
});

router.post("/login",(req,res)=>{
    try {
        
    } catch (error) {
    res.status(500).send(error);
        
    }
})


module.exports = router;