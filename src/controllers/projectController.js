const { Project } = require('../models');

module.exports = {
  // CREATE
  async create(req, res) {
    try {
      const { titulo, descricao, data_inicio, data_fim, id_usuario } = req.body;

      if (!titulo || !descricao || !id_usuario) {
        return res.status(400).json({ success: false, message: 'Campos obrigatórios faltando.' });
      }

      const project = await Project.create({
        titulo,
        descricao,
        data_inicio,
        data_fim,
        id_usuario
      });

      return res.status(201).json({ success: true, data: project });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao criar projeto.', error: error.message });
    }
  },

  // READ (all)
  async getAll(req, res) {
    try {
      const projects = await Project.findAll();
      return res.json({ success: true, data: projects });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar projetos.' });
    }
  },

  // READ (by ID)
  async getById(req, res) {
    try {
      const { id } = req.params;
      const project = await Project.findByPk(id);

      if (!project) return res.status(404).json({ success: false, message: 'Projeto não encontrado.' });

      return res.json({ success: true, data: project });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar projeto.' });
    }
  },

  // UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao, data_inicio, data_fim } = req.body;

      const project = await Project.findByPk(id);
      if (!project) return res.status(404).json({ success: false, message: 'Projeto não encontrado.' });

      await project.update({ titulo, descricao, data_inicio, data_fim });

      return res.json({ success: true, data: project });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar projeto.' });
    }
  },

  // DELETE
  async delete(req, res) {
    try {
      const { id } = req.params;

      const project = await Project.findByPk(id);
      if (!project) return res.status(404).json({ success: false, message: 'Projeto não encontrado.' });

      await project.destroy();

      return res.json({ success: true, message: 'Projeto deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao deletar projeto.' });
    }
  }
};
