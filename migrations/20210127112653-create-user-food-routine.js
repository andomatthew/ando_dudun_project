'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserFoodRoutines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      food_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Food',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      routine_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Routines',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      routine_count: {
        type: Sequelize.INTEGER
      },
      calories: {
        type: Sequelize.INTEGER
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
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserFoodRoutines');
  }
};