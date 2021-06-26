'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require("../config/connection");

class User extends Model {

  comparePassword(givenPassword) {
    return bcrypt.compareSync(givenPassword, this.password)
  }

  static associate(models) {
    // define association here
  }
}

User.init(
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    last_login: DataTypes.DATE,
  },
  {
    hooks: {
      beforeCreate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData;
      },
      beforeUpdate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData;
      },
    },
    sequelize,
    modelName: 'User',
  }
);

module.exports = User;
