'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    forgetPassword: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    emailToken: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    companyLogo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    homeAddress: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    officeAddress: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    themes: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    defaultTheme:{
      type: Sequelize.STRING,
      allowNull: true,
    },
    defaultText:{
      type: Sequelize.STRING,
      allowNull: true,
    },
    delflag:{
      type: Sequelize.ENUM,
      values: ['Y', 'N'],
      defaultValue: 'N',
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};