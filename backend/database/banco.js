export let lojas = [
  {
    id: 1,
    nome: "Loja Aracati",
    endereco: "Rua Coronel Alexanzito, Aracati",
    horarioFuncionamento: "08:00 às 17:30"
  },
  {
    id: 2,
    nome: "Loja Russas",
    endereco: "Rua Padre Raul Viêira, Russas",
    horarioFuncionamento: "06:00 às 18:00"
  }
];

export let categorias = [
  {
    id: 1,
    nome: "Castanha"
  },
  {
    id: 2,
    nome: "Linhaça"
  },
  {
    id: 3,
    nome: "Mel"
  }
];

export let produtos = [
  {
    id: 1,
    nome: "Castanha",
    preco: 25,
    tipoVenda: "quilo",
    categoria: categorias[0],
    tags: ["Integral", "Natural"],
    estoque: 50
  },
  {
    id: 2,
    nome: "Linhaça",
    preco: 54,
    tipoVenda: "quilo",
    categoria: categorias[1],
    tags: ["Vegetal"],
    estoque: 80
  },
  {
    id: 3,
    nome: "Mel",
    preco: 12,
    tipoVenda: "unidade",
    categoria: categorias[2],
    tags: ["Orgânico"],
    estoque: 20
  }
];

export let funcionarios = [];

export let clientes = [];

export let vendas = [];