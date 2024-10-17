//REDUCE
//Reduz o array a algo menor

const numeros = [20, 15, 2, 4, 10];

const soma = numeros.reduce((acumulador, item) => {
  //no reduce posso passar 4 parâmetros (acumulador, item do array, index e array completo)
  return acumulador + item;
}, 0); //por padrão, o valor inicial do reduce ja é zero mas é bom definir por questao de organização

console.log(soma);
console.clear();

//-------------------------------------------------------------------

const media = [10, 9, 7, 4];

const calcularMedia = media.reduce((acumulador, item, _, qtdadeDeNotas) => {
  //quero usar o parâmetro arrayCompleto, mas para chegar nele, preciso passar pelo index. Como não vou utilizar esse index, deixo ele com um underline e assim posso usar o próximo parâmetro

  return acumulador + item / qtdadeDeNotas.length; //para pegar a quantidade de notas existentes e poder calcular a média, peguei o array completo .length, que me trouxe a quantidade de itens do array
}, 0);

console.log(calcularMedia);

//-------------------------------------------------------------------
//somando somente pares
const somaDosPares = media.reduce((acumulador, elemento) => {
  //se o numero for par, adicione ao acumulador
  if (elemento % 2 === 0) {
    return acumulador + elemento;
  } else {
    //caso contrário, mantenha somente o acumulador
    return acumulador;
  }
});

console.log(somaDosPares);
console.clear();

//-------------------------------------------------------------------
//Total a pagar - total geral do carrinho
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

const totalAPagar = carrinhoDeCompras.reduce((acumulador, item) => {
  return item.preco * item.qtdade + acumulador;
}, 0);

console.log(totalAPagar);
