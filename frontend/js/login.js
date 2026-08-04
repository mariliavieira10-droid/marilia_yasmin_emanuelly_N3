import { realizarLogin } from "./api.js";

const form = document.getElementById("formLogin");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    login: document.getElementById("login").value,

    senha: document.getElementById("senha").value,
  };

  const resposta = await realizarLogin(dados);

  if (resposta.cliente) {
    localStorage.setItem(
      "cliente",

      JSON.stringify(resposta.cliente),
    );

    alert("Login realizado com sucesso!");

    window.location.href = "index.html";
  } else {
    alert(resposta.mensagem);
  }
});