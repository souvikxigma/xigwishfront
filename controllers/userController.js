const Models = require('../models');
const Validator = require('fastest-validator');
var format = require('date-format');
////
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
var store = require('store');

function signup(req, res) {
    return res.render('front/Auth/signup', {
        page_name: 'signup',
        layout: false
    });
}


async function signupAction(req, res) {

    const salt = await bcrypt.genSalt(10);
    var usr = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        mobile: req.body.mobile
    };
    created_user = await Models.User.create(usr);
    req.flash('success', 'User added successfully');
    return res.redirect('/login');

}

function login(req, res) {
    return res.render('front/Auth/signin', {
        page_name: 'signin',
        layout: false
    });
}


async function loginAction(req, res) {

    const user = await Models.User.findOne({ where: { email: req.body.email } });
    if (user) {
        const password_valid = await bcrypt.compare(req.body.password, user.password);
        if (password_valid) {
            token = jwt.sign({ "id": user.id, "email": user.email, "first_name": user.first_name }, process.env.SECRET,{
                expiresIn: '1h' // expires in 1 hours
            });
            store.set('token',token);
            //res.status(200).json({ token: token });
            //req.flash('error', 'Password Incorrect');
            return res.redirect('/contact');
        } else {
            req.flash('error', 'Password Incorrect');
            return res.redirect('/login');
        }

    } else {
        req.flash('error', 'User does not exist');
        return res.redirect('/login');
    }

}

async function profile(req,res){
    let userInfo = await Models.User.findOne({ where: { id: req.id } });
    return res.render('front/Profile/profile', {
        page_name: 'profile',
        data: userInfo
    });
}

async function profileUpdate(req,res){
    const userId = req.id;
    var companyLogo = null;
    //image upload//
    if (req.files && req.files.companyLogo) {
        //if (req.files) {
        console.log('img',req.files.companyLogo)
        var documentFile = req.files.companyLogo;
        var imgString = documentFile.name;
        var imgArr = imgString.split(".");
        var imgname = "company-logo-"+Date.now()+"."+imgArr[1];
       // companyLogo = imgname;
        documentFile.mv("public/uploads/companyLogo/" + imgname, function (err) {
          if (err) {
            req.flash('error', 'Image not uploaded');
            res.redirect('/user/profile');
          } else {
            companyLogo = imgname;
          }
        });

    }
    //end image upload//

    const updateUser = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        companyName: req.body.companyName,
        companyLogo: imgname,
        homeAddress: req.body.homeAddress,
        officeAddress: req.body.officeAddress,
    }

   
   let updateInfo = await Models.User.update(updateUser, { where: { id: userId } });
   if(updateInfo){
        req.flash('success', 'Profile updated Successfully');
        res.redirect('/user/profile');
   }else{
        req.flash('error', 'Profile is not updated');
        res.redirect('/user/profile');
   }

    
}


async function logout(req,res){
    store.clearAll();
    req.flash('success', 'Logout Successfully');
    return res.redirect('/login');

}

module.exports = {
    signup: signup,
    signupAction: signupAction,
    login: login,
    loginAction: loginAction,
    logout: logout,
    profile: profile,
    profileUpdate: profileUpdate,
}