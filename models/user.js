'use strict';
const { hash_password, compare } = require('../helper/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Food, {
        through: models.UserFoodRoutine,
        foreignKey: 'user_id'
      })
    }

    fullName() {
      return `${this.first_name} ${this.last_name}`
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    total_calories: {
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hash_password(instance.password) 
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};