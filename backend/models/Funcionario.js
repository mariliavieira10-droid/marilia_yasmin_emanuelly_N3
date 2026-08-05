export default class Funcionarios {
  constructor(
    id,
    nome,
    cargo,
    salario,
    horaEntrada,
    horaSaida,
    regime,
    loja
  ) {
    this.id = id;
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.horaEntrada = horaEntrada;
    this.horaSaida = horaSaida;
    this.regime = regime;
    this.loja = loja;
  }
}