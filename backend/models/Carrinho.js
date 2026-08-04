export default class Carrinho {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
    this.total = 0;
  }

  adicionarItem(produto, quantidade) {
    this.itens.push({
      produto,
      quantidade
    });

    this.calcularTotal();
  }

  removerItem(idProduto) {
    this.itens = this.itens.filter(
      item => item.produto.id !== idProduto
    );

    this.calcularTotal();
  }

  calcularTotal() {
    this.total = 0;

    this.itens.forEach(item => {
      this.total += item.produto.preco * item.quantidade;
    });
  }
}