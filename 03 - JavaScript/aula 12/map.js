//UTILIZANDO MAP
//cria um novo array que possui o mesmo numero de itens do array anterior
//composto pelos elementos que foram retornados a cada iteração

const numeros = [10, 22, 28, 75, 66, 80];

const novoArray = numeros.map((item) => {
  return item * 2;
});

console.log(novoArray);
console.clear();

//--------------------------------------------------------------------------
//NUMEROS AO QUADRADO COM MAP

const numAoQuadrado = [2, 4, 6, 8, 10, 12];

const resultado = numAoQuadrado.map((item) => {
  return item * item;
});

console.log(resultado);

//ou...de um jeito mais compacto...

const resultado2 = numAoQuadrado.map((item) => item ** 2);
console.log(resultado2);
console.clear();

//--------------------------------------------------------------------------
//DESESTRUTURAÇÃO OU SPREAD OPERATOR

const pessoa = {
  nome: "Pessoa 1",
  idade: 54,
  altura: 1.68,
};

// pessoa.peso = 68

//utilizando o conceito de desestruturação ou spread operator para acrescentar o peso
const pessoaComPeso = {
  ...pessoa, //pegando todos os itens do objeto pessoa
  peso: 68, //adicionando o peso
};

console.log(pessoaComPeso);
console.clear();

//--------------------------------------------------------------------------

const carrinhoDeCompras = [
  {
    produto: "Leite 1l",
    preco: 7.35,
    qtdade: 3,
  },

  {
    produto: "Arroz 5kg",
    preco: 31.99,
    qtdade: 1,
  },

  {
    produto: "Feijão",
    preco: 8.39,
    qtdade: 2,
  },
];

const total = carrinhoDeCompras.map((item) => {
  return {
    ...item, //retornei cada objeto dentro do array
    total: item.preco * item.qtdade, //acrescentando o objeto total
  };
});

console.log(total);
console.clear();

//--------------------------------------------------------------------------
//MEU EXEMPLO PARA FIXAÇÃO

const imc = [
  {
    pessoa: "Ana",
    altura: 1.65,
    peso: 54,
  },

  {
    pessoa: "Erick",
    altura: 1.41,
    peso: 35,
  },

  {
    pessoa: "Camila",
    altura: 1.78,
    peso: 78,
  },
];

const calculo = imc.map((pessoa) => {
  return {
    ...pessoa,
    imcCalculo: pessoa.peso / (pessoa.altura * pessoa.altura),
  };
});

console.log(calculo);
console.clear();
//--------------------------------------------------------------------------
//MAIS UM EXEMPLO PARA FIXAÇÃO

const compras = [
  {
    produto: "Calça Jeans Fem",
    preco: 120,
    qtdade: 1,
  },

  {
    produto: "Blusa básica",
    preco: 25,
    qtdade: 2,
  },

  {
    produto: "par de meias",
    preco: 6.99,
    qtdade: 5,
  },
];

const totalDaCompra = compras.map((item) => {
  return {
    ...item,
    total: item.preco * item.qtdade,
  };
});

console.log(totalDaCompra);
console.clear();
