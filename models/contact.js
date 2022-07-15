'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    name: {
      type: Sequelize.STRING,  
      allowNull: false
    },
    birthday: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['male', 'female','others'],
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: true
    }
    
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};