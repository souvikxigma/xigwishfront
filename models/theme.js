'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Theme.init({
    uniqueCode:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    latest: {
      type: Sequelize.ENUM,
      values: ['Y', 'N'],
      defaultValue: 'N', 
    },
    status: {
      type: Sequelize.STRING,
      values: ['Y', 'N'],
      defaultValue: 'Y',
    },
    delflag:{
      type: Sequelize.ENUM,
      values: ['Y', 'N'],
      defaultValue: 'N',
    }
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};