import Categoria from "../models/Categoria.js";
import { categorias } from "../database/banco.js";

export function listarCategorias(req, res) {
  res.json(categorias);
}

export function cadastrarCategoria(req, res) {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({
      mensagem: "Informe o nome.",
    });
  }

  const categoria = new Categoria(categorias.length + 1, nome);

  categorias.push(categoria);

  res.status(201).json(categoria);
}

export function removerCategoria(req, res) {
  const id = Number(req.params.id);

  const indice = categorias.findIndex((c) => c.id === id);

  if (indice == -1) {
    return res.status(404).json({
      mensagem: "Categoria não encontrada.",
    });
  }

  categorias.splice(indice, 1);

  res.json({
    mensagem: "Categoria removida.",
  });
}