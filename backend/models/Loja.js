export default class Loja {
  constructor(id, nome, endereco, horarioFuncionamento) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.horarioFuncionamento = horarioFuncionamento;
    this.funcionarios = [];
  }

  adicionarFuncionario(funcionario) {
    this.funcionarios.push(funcionario);
  }
}