var cron = require('node-cron');
const Models = require('../models');
const Sequelize = require('sequelize');
var format = require('date-format');
////
const moment = require('moment');


async function cronBirthday(req, res) {
    
    

    // cron.schedule('* * * * *', () => {
    //     console.log('running a task every minute');
    //   });

    
    const Op = Sequelize.Op;
    const TODAY_START = moment().format('YYYY-MM-DD 00:00');
    const NOW = moment().format('YYYY-MM-DD 23:59');

    const users = await Models.Contact.findAll({
        where: {
          birthday: { 
            [Op.between]: [
                TODAY_START,
                NOW,
            ]
          },
        },
     });
     console.log(users);

      if(users){
        cron.schedule('* * * * *', () => {
            //1 0 * * *
            console.log('running a task every minute');
            //email + logic//
        });
      }

    return res.send({"cron":"success"});
}


module.exports = {
    cronBirthday: cronBirthday,
}