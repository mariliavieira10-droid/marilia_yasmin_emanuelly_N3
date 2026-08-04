import Loja from "../models/Loja.js";
import { lojas } from "../database/banco.js";


export function listarLojas(req, res) {
  res.json(lojas);
}


export function cadastrarLoja(req, res) {
  const {
    nome,
    endereco,
    horarioFuncionamento
  } = req.body;

  const loja = new Loja(
    lojas.length + 1,
    nome,
    endereco,
    horarioFuncionamento
  );

  lojas.push(loja);

  res.status(201).json(loja);
}