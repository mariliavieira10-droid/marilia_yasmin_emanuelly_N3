import { buscarProdutos, finalizarVenda } from "./api.js";

const listaCarrinho = document.getElementById("carrinho");
const totalElemento = document.getElementById("total");
const btnFinalizar = document.querySelector(".btn-finalizar");

async function carregarCarrinho() {
  const produtos = await buscarProdutos();

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  listaCarrinho.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {
    const produto = produtos.find((p) => p.id === item.produtoId);

    if (!produto) return;

    const subtotal = produto.preco * item.quantidade;

    total += subtotal;

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
            <h2>${produto.nome}</h2>

            <p>Quantidade: ${item.quantidade}</p>

            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>

            <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>

            <button onclick="removerProduto(${produto.id})">
                Remover
            </button>
        `;

    listaCarrinho.appendChild(card);
  });

  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
}

window.removerProduto = function (id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho = carrinho.filter((item) => item.produtoId !== id);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  carregarCarrinho();
};

btnFinalizar.addEventListener("click", async () => {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    alert("Carrinho vazio.");

    return;
  }

  const cliente = JSON.parse(localStorage.getItem("cliente"));

  const venda = {
    clienteId: cliente ? cliente.id : null,

    itens: carrinho,

    formaPagamento: "Cartão de Crédito",

    tipoVenda: cliente ? "online" : "fisica",
  };

  const resposta = await finalizarVenda(venda);

  if (resposta.id) {
    alert("Compra realizada com sucesso!");

    localStorage.removeItem("carrinho");

    carregarCarrinho();
  } else {
    alert(resposta.mensagem);
  }
});

carregarCarrinho();