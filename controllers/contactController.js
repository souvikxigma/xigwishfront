const Models = require('../models');
const Validator = require('fastest-validator');
var format = require('date-format');
const { localsName } = require('ejs');

function index(req, res) {

    Models.Contact.findAll({})
    .then(result => {
        // res.status(200).json(result);

        return res.render('front/contactlist', {
            page_name: 'contact',
            data: result
        });

    }).catch(error => {
        // res.status(500).json({
        //     message: "something going wrong",
        //     error: error
        // });
    });
}


function add(req, res) {

    return res.render('front/addcontact', {
        page_name: 'contact',
    });
}


function addAction(req, res) {

    // console.log(req.body);
    // return false;
    const newContact = {
        name: req.body.name,
        birthday: format(req.body.birthday),
        companyName: req.body.companyName,
        gender: req.body.gender,
        email: req.body.email,
        mobile: req.body.mobile,
    }

    const schema = {
        name: { type: "string", optional: false, max: "100" },
        birthday: { type: "date", optional: false },
        companyName: { type: "string", optional: true },
        gender: { optional: false},
        email: { type: "string", optional: true },
        mobile: { type: "string", optional: true },
    }

    // const validator = new Validator();
    // const validationResponse = validator.validate(newCategory, schema);
    // if (validationResponse !== true) {
    //     return res.status(400).json({
    //         message: "validation failed.",
    //         error: validationResponse
    //     });
    // }

    Models.Contact.create(newContact).then(result => {
        // res.status(201).json({
        //     message: "Contact added successfully.",
        //     data: result
        // });
        req.flash('success', 'Contact added successfully');
        return res.redirect('/contact/add');
    }).catch(error => {
        res.status(500).json({
            message: "something going wrong",
            error: error
        });
    });

   
}


function templateSubmit(req,res){

    Models.Contact.findOne({})
    .then(result => {
        // res.status(200).json(result);

        return res.render('front/templat', {
            page_name: 'template',
            name: result.name,
            birthday: result.birthday
        });

    }).catch(error => {
        // res.status(500).json({
        //     message: "something going wrong",
        //     error: error
        // });
    });

    
}


function templateSubmitAction(req,res){
    let name = req.body.name;
    let birthday = req.body.birthday;

    console.log('ioioi---',req.body)

    return res.render('front/templat', {
        page_name: 'template',
        name:name,
        birthday:birthday
    });
}




module.exports = {
    index: index,
    add: add,
    addAction: addAction,
    ///
    templateSubmit: templateSubmit,
    templateSubmitAction:templateSubmitAction,
}