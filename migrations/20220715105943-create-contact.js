'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
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
      },
      theme:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      text:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      delflag:{
        type: Sequelize.ENUM,
        values: ['Y', 'N'],
        defaultValue: 'N',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contacts');
  }
};