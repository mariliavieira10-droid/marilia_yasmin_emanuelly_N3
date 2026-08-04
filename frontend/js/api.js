const BASE_URL = "http://localhost:3000";

export async function buscarProdutos() {
  const response = await fetch(`${BASE_URL}/produtos`);

  return await response.json();
}

export async function cadastrarCliente(cliente) {
  const response = await fetch(`${BASE_URL}/clientes`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(cliente),
  });

  return await response.json();
}

export async function realizarLogin(login) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(login),
  });

  return await response.json();
}

export async function finalizarVenda(venda) {
  const response = await fetch(`${BASE_URL}/vendas`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(venda),
  });

  return await response.json();
}