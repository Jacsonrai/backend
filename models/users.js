'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    firstName: DataTypes.STRING,
    age: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endingDate: DataTypes.STRING,
    allergies: DataTypes.STRING,
    medicalDiagnosis: DataTypes.STRING,
    description: DataTypes.STRING,
    prescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};