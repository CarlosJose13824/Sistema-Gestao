const express = require('express');
const cors = require('cors'); // <-- importar cors
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors()); // <-- permitir CORS

// ROTAS
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
