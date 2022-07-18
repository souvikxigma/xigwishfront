'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
    await queryInterface.dropTable('Users');
  }
};