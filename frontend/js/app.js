import { buscarProdutos } from "./api.js";

const lista = document.getElementById("lista-produtos");

async function carregarProdutos() {
  const produtos = await buscarProdutos();

  lista.innerHTML = "";

  produtos.forEach((produto) => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
            <h2>${produto.nome}</h2>

            <p><strong>Categoria:</strong> ${produto.categoria}</p>

            <p><strong>Tipo de venda:</strong> ${produto.tipoVenda}</p>

            <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>

            <p><strong>Estoque:</strong> ${produto.estoque}</p>

            <button onclick="adicionarCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        `;

    lista.appendChild(card);
  });
}

window.adicionarCarrinho = function (id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const item = carrinho.find((p) => p.produtoId === id);

  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({
      produtoId: id,
      quantidade: 1,
    });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
};

carregarProdutos();