'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Routine.belongsToMany(models.User, {
        through: models.UserFoodRoutine,
        foreignKey: 'routine_id'
      })
    }
  };
  Routine.init({
    routine_name: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Routine',
  });
  return Routine;
};