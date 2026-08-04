import Funcionario from "../models/Funcionario.js";
import {
  funcionarios,
  lojas
} from "../database/banco.js";

// GET
export function listarFuncionarios(req, res) {
  res.json(funcionarios);
}

// POST
export function cadastrarFuncionario(req, res) {
  const {
    nome,
    cargo,
    salario,
    horaEntrada,
    horaSaida,
    regime,
    lojaId
  } = req.body;

  const loja = lojas.find(l => l.id === lojaId);

  if (!loja) {
    return res.status(404).json({
      mensagem: "Loja não encontrada."
    });
  }

  const funcionario = new Funcionario(
    funcionarios.length + 1,
    nome,
    cargo,
    salario,
    horaEntrada,
    horaSaida,
    regime,
    loja
  );

  funcionarios.push(funcionario);

  loja.adicionarFuncionario(funcionario);

  res.status(201).json(funcionario);
}