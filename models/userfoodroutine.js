'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFoodRoutine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserFoodRoutine.init({
    user_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER,
    routine_id: DataTypes.INTEGER,
    routine_count: DataTypes.INTEGER,
    calories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserFoodRoutine',
  });
  return UserFoodRoutine;
};