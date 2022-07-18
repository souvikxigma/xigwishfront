var jwt = require('jsonwebtoken');
const Models = require('../models');
var store = require('store');
//env file
// require('dotenv').config({path:'.env'});

async function authUserByStorage(req,res, next){
    
    if(store.get('token')){
        console.log(store.get('token'));
        const token = store.get('token');
        jwt.verify(token, process.env.SECRET,async function(err, data) {
            if(err){
                req.flash('error', err);
                return res.redirect('/login');
            }
            if(data){
                var userid = data.id;

                const user = await Models.User.findOne({ where: { id: userid } });
                if(user){
                    req.id = userid;
                    req.user = user;
                    next(); 
                }else{
                    req.flash('error', 'User not found');
                    return res.redirect('/login');
                }

            }
        });
        
    }else{
        req.flash('error', 'Invalid or expired token');
        return res.redirect('/login');
    }

}

module.exports = {
    authUserByStorage:authUserByStorage
}