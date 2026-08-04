import Venda from "../models/Venda.js";
import {
  vendas,
  clientes,
  produtos
} from "../database/banco.js";

// GET /vendas
export function listarVendas(req, res) {
  res.json(vendas);
}

// POST /vendas
export function criarVenda(req, res) {
  const {
    clienteId,
    itens,
    formaPagamento,
    tipoVenda
  } = req.body;

  let cliente = null;


  if (clienteId) {
    cliente = clientes.find(c => c.id === clienteId);

    if (!cliente) {
      return res.status(404).json({
        mensagem: "Cliente não encontrado."
      });
    }
  }

  const novaVenda = new Venda(
    vendas.length + 1,
    cliente,
    formaPagamento,
    tipoVenda
  );

  for (const item of itens) {
    const produto = produtos.find(
      p => p.id === item.produtoId
    );

    if (!produto) {
      return res.status(404).json({
        mensagem: `Produto ${item.produtoId} não encontrado.`
      });
    }

    if (produto.estoque < item.quantidade) {
      return res.status(400).json({
        mensagem: `Estoque insuficiente para ${produto.nome}.`
      });
    }

    novaVenda.adicionarProduto(
      produto,
      item.quantidade
    );
  }

  if (cliente) {
    cliente.adicionarCompra(novaVenda);
  }

  vendas.push(novaVenda);

  res.status(201).json(novaVenda);
}