'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('kittenProfile',{
      Id:{
        type:Sequelize.BIGINT,
        primaryKey:true,
        autoIncrement:true,
      },
      FileId:{
        type:Sequelize.BIGINT,
        allowNull:false,
        references: {
          model: 'file',
          key: 'Id'
        }
      },
      Price:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:false,
      },
      Age:{
        type:Sequelize.BIGINT,
        allowNull:false
      },
      OriginalName:{
        type:Sequelize.STRING(256),
        allowNull:true,
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
