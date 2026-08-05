export default class Cliente {
  constructor(
    id,
    nome,
    email,
    login,
    senha
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.login = login;
    this.senha = senha;
    this.historicoCompras = [];
  }

  adicionarCompra(venda) {
    this.historicoCompras.push(venda);
  }
}