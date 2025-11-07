'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Um usuário possui vários projetos
      User.hasMany(models.Project, {
        foreignKey: 'id_usuario',
        as: 'projetos'
      });
    }
  }

  User.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    perfil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
