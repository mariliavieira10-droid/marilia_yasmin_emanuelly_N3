import { buscarProdutos } from "./api.js";

const lista = document.getElementById("lista-produtos");

async function carregar() {
  const produtos = await buscarProdutos();

  lista.innerHTML = "";

  produtos.forEach((produto) => {
    const div = document.createElement("div");

    div.className = "card";

    div.innerHTML = `

            <h2>${produto.nome}</h2>

            <p><strong>Categoria:</strong> ${produto.categoria.nome}</p>

            <p><strong>Preço:</strong> R$ ${produto.preco}</p>

            <p><strong>Tipo:</strong> ${produto.tipoVenda}</p>

            <p><strong>Tags:</strong> ${produto.tags.join(", ")}</p>

            <p><strong>Estoque:</strong> ${produto.estoque}</p>

            <button onclick="comprar(${produto.id})">

                Adicionar ao carrinho

            </button>

        `;

    lista.appendChild(div);
  });
}

window.comprar = function (id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const existe = carrinho.find((item) => item.produtoId === id);

  if (existe) {
    existe.quantidade++;
  } else {
    carrinho.push({
      produtoId: id,

      quantidade: 1,
    });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
};

carregar();