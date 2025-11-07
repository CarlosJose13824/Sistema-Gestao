'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // Um projeto pertence a um usuário
      Project.belongsTo(models.User, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });

      // Um projeto possui várias tarefas
      Project.hasMany(models.Task, {
        foreignKey: 'id_projeto',
        as: 'tarefas'
      });
    }
  }

  Project.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
  });

  return Project;
};
