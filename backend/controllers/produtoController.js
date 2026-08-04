import { produtos, categorias } from "../database/banco.js";
import Produto from "../models/Produto.js";


export function listarProdutos(req, res) {
  res.json(produtos);
}


export function buscarProdutoPorId(req, res) {
  const id = Number(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado."
    });
  }

  res.json(produto);
}


export function cadastrarProduto(req, res) {
  const {
    nome,
    preco,
    tipoVenda,
    categoriaId,
    tags,
    estoque
  } = req.body;

  const categoria = categorias.find(c => c.id === categoriaId);

  if (!categoria) {
    return res.status(404).json({
      mensagem: "Categoria não encontrada."
    });
  }

  const produto = new Produto(
    produtos.length + 1,
    nome,
    preco,
    tipoVenda,
    categoria,
    tags,
    estoque
  );

  produtos.push(produto);

  res.status(201).json(produto);
}

export function atualizarProduto(req, res) {
  const id = Number(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado."
    });
  }

  Object.assign(produto, req.body);

  res.json(produto);
}


export function removerProduto(req, res) {
  const id = Number(req.params.id);

  const indice = produtos.findIndex(p => p.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Produto não encontrado."
    });
  }

  produtos.splice(indice, 1);

  res.json({
    mensagem: "Produto removido."
  });
}


export function buscarPorNome(req, res) {
  const nome = req.query.nome.toLowerCase();

  const resultado = produtos.filter(p =>
    p.nome.toLowerCase().includes(nome)
  );

  res.json(resultado);
}


export function buscarPorCategoria(req, res) {
  const id = Number(req.params.id);

  const resultado = produtos.filter(
    p => p.categoria.id === id
  );

  res.json(resultado);
}

export function buscarPorTag(req, res) {
  const tag = req.params.tag.toLowerCase();

  const resultado = produtos.filter(produto =>
    produto.tags.some(
      t => t.toLowerCase() === tag
    )
  );

  res.json(resultado);
}