'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
    await queryInterface.dropTable('Themes');
  }
};