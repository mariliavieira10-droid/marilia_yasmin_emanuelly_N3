import { clientes } from "../database/banco.js";

export function login(req, res) {
  const {
    login,
    senha
  } = req.body;

  const cliente = clientes.find(
    c =>
      c.login === login &&
      c.senha === senha
  );

  if (!cliente) {
    return res.status(401).json({
      mensagem: "Login ou senha inválidos."
    });
  }

  res.json({
    mensagem: "Login realizado com sucesso.",
    cliente
  });
}
