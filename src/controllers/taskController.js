const { Task } = require('../models');

module.exports = {
  // CREATE
  async create(req, res) {
    try {
      const { titulo, status, prioridade, id_projeto } = req.body;

      if (!titulo || !status || !prioridade || !id_projeto) {
        return res.status(400).json({ success: false, message: 'Campos obrigatórios faltando.' });
      }

      const task = await Task.create({
        titulo,
        status,
        prioridade,
        id_projeto
      });

      return res.status(201).json({ success: true, data: task });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao criar tarefa.', error: error.message });
    }
  },

  // READ (all)
  async getAll(req, res) {
    try {
      const tasks = await Task.findAll();
      return res.json({ success: true, data: tasks });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar tarefas.' });
    }
  },

  // READ (by ID)
  async getById(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) return res.status(404).json({ success: false, message: 'Tarefa não encontrada.' });

      return res.json({ success: true, data: task });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar tarefa.' });
    }
  },

  // UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      const { titulo, status, prioridade } = req.body;

      const task = await Task.findByPk(id);
      if (!task) return res.status(404).json({ success: false, message: 'Tarefa não encontrada.' });

      await task.update({ titulo, status, prioridade });

      return res.json({ success: true, data: task });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar tarefa.' });
    }
  },

  // DELETE
  async delete(req, res) {
    try {
      const { id } = req.params;

      const task = await Task.findByPk(id);
      if (!task) return res.status(404).json({ success: false, message: 'Tarefa não encontrada.' });

      await task.destroy();

      return res.json({ success: true, message: 'Tarefa deletada com sucesso.' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao deletar tarefa.' });
    }
  }
};
