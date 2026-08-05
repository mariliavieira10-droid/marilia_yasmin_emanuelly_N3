export default class Produto {
  constructor(
    id,
    nome,
    preco,
    tipoVenda,
    categoria,
    tags = [],
    estoque = 0
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.tipoVenda = tipoVenda;
    this.categoria = categoria;
    this.tags = tags;
    this.estoque = estoque;
  }

  diminuirEstoque(quantidade) {
    this.estoque -= quantidade;
  }
}