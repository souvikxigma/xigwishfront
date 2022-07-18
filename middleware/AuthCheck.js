var jwt = require('jsonwebtoken');
const Models = require('../models');

//env file
// require('dotenv').config({path:'.env'});

async function authUser(req,res, next){
    console.log(req.headers.authorization);
    if(req.headers.authorization){
        console.log(req.headers.authorization);
        next();
        
    }else{
        return res.status(401).json({
            message: 'Invalid or expired token'
        });
    }

}

module.exports = {
    authUser:authUser
}