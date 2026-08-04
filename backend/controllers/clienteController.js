import Cliente from "../models/Cliente.js";
import { clientes } from "../database/banco.js";


export function listarClientes(req, res) {
  res.json(clientes);
}


export function buscarCliente(req, res) {
  const id = Number(req.params.id);

  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({
      mensagem: "Cliente não encontrado."
    });
  }

  res.json(cliente);
}


export function cadastrarCliente(req, res) {
  const {
    nome,
    email,
    login,
    senha
  } = req.body;

  const cliente = new Cliente(
    clientes.length + 1,
    nome,
    email,
    login,
    senha
  );

  clientes.push(cliente);

  res.status(201).json(cliente);
}


export function atualizarCliente(req, res) {
  const id = Number(req.params.id);

  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({
      mensagem: "Cliente não encontrado."
    });
  }

  Object.assign(cliente, req.body);

  res.json(cliente);
}


export function removerCliente(req, res) {
  const id = Number(req.params.id);

  const indice = clientes.findIndex(c => c.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Cliente não encontrado."
    });
  }

  clientes.splice(indice, 1);

  res.json({
    mensagem: "Cliente removido."
  });
}