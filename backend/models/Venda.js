export default class Venda {
  constructor(id, cliente, formaPagamento, tipoVenda) {
    this.id = id;

    this.cliente = cliente;

    this.formaPagamento = formaPagamento;

    this.tipoVenda = tipoVenda;

    this.produtos = [];

    this.total = 0;
  }

  adicionarProduto(produto, quantidade) {
    this.produtos.push({
      produto,
      quantidade,
    });

    if (produto.tipoVenda === "quilo") {
      this.total += produto.preco * quantidade;
    } else {
      this.total += produto.preco * quantidade;
    }

    produto.diminuirEstoque(quantidade);
  }
}