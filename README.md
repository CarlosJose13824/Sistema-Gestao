Sistema de Gestão TechManage
Descrição

Sistema web para gerenciar usuários, projetos e tarefas. Permite cadastrar, listar, atualizar e excluir registros diretamente no banco de dados.

Estrutura do Projeto:
sistema-gestao/
│
├─ src/
│  ├─ controllers/      # Lógica das rotas
│  ├─ models/           # Modelos do banco de dados
│  ├─ routes/           # Rotas do sistema
│  └─ server.js         # Servidor Express
│
├─ frontend/
│  ├─ index.html        # Interface básica
│  ├─ style.css
│  └─ script.js
│
├─ .env
└─ package.json

Instalação

Clonar o repositório:

git clone <https://github.com/CarlosJose13824/Sistema-Gestao.git>
cd sistema-gestao

Instalar dependências:

npm install


Configurar variáveis de ambiente:
Crie um arquivo .env baseado em .env.example:

PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=sistema_gestao


Criar e popular o banco de dados:

npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all


Rodar o servidor:

npm run dev


Abrir o frontend:

Abra frontend/index.html no navegador (ou via Live Server).

Uso

Cadastrar e listar usuários, projetos e tarefas pelo frontend.

Para atualizar ou excluir registros, use ferramentas como Postman ou qualquer cliente de API.