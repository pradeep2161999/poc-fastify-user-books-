'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - user - table - token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  add - user - table - token.init({
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'add-user-table-token',
  });
  return add - user - table - token;
};