import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import produtoRoutes from './routes/produtoRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import vendaRoutes from './routes/vendaRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import lojaRoutes from './routes/lojaRoutes.js';
import loginRoutes from './routes/loginRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas da API
app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/vendas', vendaRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/lojas', lojaRoutes);
app.use('/login', loginRoutes);

// Caminho do frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve a pasta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});