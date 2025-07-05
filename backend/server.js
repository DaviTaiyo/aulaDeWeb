const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DB_FILE = './banco.json';

// Função para carregar os usuários
function lerUsuarios() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data);
}

// Função para salvar os usuários
function salvarUsuarios(usuarios) {
  fs.writeFileSync(DB_FILE, JSON.stringify(usuarios, null, 2));
}

// Rota de registro
app.post('/registro', (req, res) => {
  const { nome, email, senha } = req.body;
  const usuarios = lerUsuarios();

  const existente = usuarios.find(user => user.email === email);
  if (existente) {
    return res.status(400).json({ mensagem: 'Usuário já existe' });
  }

  usuarios.push({ nome, email, senha });
  salvarUsuarios(usuarios);
  res.json({ mensagem: 'Usuário registrado com sucesso!' });
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const usuarios = lerUsuarios();

  const usuario = usuarios.find(user => user.email === email && user.senha === senha);
  if (usuario) {
    res.json({ mensagem: 'Login bem-sucedido!', usuario });
  } else {
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
