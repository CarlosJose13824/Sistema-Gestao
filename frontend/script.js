const BASE_URL = 'http://localhost:3000';

// ===== USUÁRIOS =====
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');
const loadUsersBtn = document.getElementById('loadUsers');

userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(userForm));
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...formData, senha: '123456' })
  });
  const data = await res.json();
  alert(data.success ? 'Usuário criado!' : data.message);
  userForm.reset();
});

loadUsersBtn.addEventListener('click', async () => {
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  userList.innerHTML = '';
  data.data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `ID: ${user.id}, Nome: ${user.nome}, Email: ${user.email}, Perfil: ${user.perfil}`;
    userList.appendChild(li);
  });
});

// ===== PROJETOS =====
const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');
const loadProjectsBtn = document.getElementById('loadProjects');

projectForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(projectForm));
  const res = await fetch(`${BASE_URL}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  alert(data.success ? 'Projeto criado!' : data.message);
  projectForm.reset();
});

loadProjectsBtn.addEventListener('click', async () => {
  const res = await fetch(`${BASE_URL}/projects`);
  const data = await res.json();
  projectList.innerHTML = '';
  data.data.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `ID: ${p.id}, Título: ${p.titulo}, Usuário: ${p.id_usuario}`;
    projectList.appendChild(li);
  });
});

// ===== TAREFAS =====
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const loadTasksBtn = document.getElementById('loadTasks');

taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(taskForm));
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  alert(data.success ? 'Tarefa criada!' : data.message);
  taskForm.reset();
});

loadTasksBtn.addEventListener('click', async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  const data = await res.json();
  taskList.innerHTML = '';
  data.data.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `ID: ${t.id}, Título: ${t.titulo}, Status: ${t.status}, Projeto: ${t.id_projeto}`;
    taskList.appendChild(li);
  });
});
// Atualizar Usuário
const updateUserForm = document.getElementById('updateUserForm');
updateUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { id, ...fields } = Object.fromEntries(new FormData(updateUserForm));
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields)
  });
  const data = await res.json();
  alert(data.success ? 'Usuário atualizado!' : data.message);
});

// Deletar Usuário
const deleteUserForm = document.getElementById('deleteUserForm');
deleteUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { id } = Object.fromEntries(new FormData(deleteUserForm));
  const res = await fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' });
  const data = await res.json();
  alert(data.success ? 'Usuário deletado!' : data.message);
});

