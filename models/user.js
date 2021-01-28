'use strict';
const { hash_password } = require('../helper/bcrypt')

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

    totalCal() {
      let calories = 0
      if (this.Food.length) {
        this.Food.forEach(food => {
          calories += food.UserFoodRoutine.calories
        })
      }
      return calories
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
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