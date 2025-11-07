const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  // CREATE
  async create(req, res) {
    try {
      const { nome, email, senha, perfil } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({ success: false, message: 'Campos obrigatórios faltando.' });
      }

      const senhaHash = await bcrypt.hash(senha, 10);

      const user = await User.create({
        nome,
        email,
        senha: senhaHash,
        perfil
      });

      return res.status(201).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao criar usuário.', error: error.message });
    }
  },

  // READ (all)
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json({ success: true, data: users });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar usuários.' });
    }
  },

  // READ (by ID)
  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });

      return res.json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar usuário.' });
    }
  },

  // UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, perfil } = req.body;

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });

      await user.update({ nome, email, perfil });

      return res.json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar usuário.' });
    }
  },

  // DELETE
  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });

      await user.destroy();

      return res.json({ success: true, message: 'Usuário deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao deletar usuário.' });
    }
  }
};
