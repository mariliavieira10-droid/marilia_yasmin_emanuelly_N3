import { cadastrarCliente } from "./api.js";

const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const cliente = {
    nome: document.getElementById("nome").value,

    email: document.getElementById("email").value,

    login: document.getElementById("login").value,

    senha: document.getElementById("senha").value,
  };

  const resposta = await cadastrarCliente(cliente);

  if (resposta.id) {
    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
  } else {
    alert(resposta.mensagem);
  }
});