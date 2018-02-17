'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('File',{
      Id:{
        type:Sequelize.BIGINT,
        primaryKey:true,
        autoIncrement:true
      },
      Destination:{
        type:Sequelize.STRING(512),
        allowNull:false,
      },
      MimeType:{
        type:Sequelize.STRING(256),
        allowNull:false
      },
      NameOnFile:{
        type:Sequelize.STRING(256),
        allowNull:false
      },
      Path:{
        type:Sequelize.STRING(512),
        allowNull:false
      },
      Size: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      IsDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: "0"
      }
    })
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
