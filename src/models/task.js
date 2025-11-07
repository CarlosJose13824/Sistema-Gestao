'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // Cada tarefa pertence a um projeto
      Task.belongsTo(models.Project, {
        foreignKey: 'id_projeto',
        as: 'projeto'
      });
    }
  }

  Task.init({
    titulo: DataTypes.STRING,
    status: DataTypes.STRING,
    prioridade: DataTypes.STRING,
    id_projeto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};
