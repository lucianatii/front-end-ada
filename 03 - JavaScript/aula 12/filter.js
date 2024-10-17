//UTILIZANDO FILTER
//filtrando arrays
//mesma ideia de find, sendo que find traz o primeiro elemento que satisfizer a condição solicitada, enquanto filter traz todos os elementos que satisfazem a condição.

const numeros = [10, 23, 30, 45, 58, 67];

const pares = numeros.filter((elemento) => elemento % 2 === 0);

console.log(pares);
console.clear();

//----------------------------------------------------------
//obter um array somente com alunos que tiveram media maior que 85
const alunos = [
  { nome: "Erick", media: 100 },
  { nome: "Miguel", media: 90 },
  { nome: "Lorenzo", media: 85 },
  { nome: "Henrique", media: 96 },
  { nome: "Pedro", media: 65 },
];

const media = alunos.filter((aluno) => aluno.media > 85);

console.log(media);
console.clear();

//----------------------------------------------------------
// Buscar produtos que custem menos de $10 e não sejam bebida

const produtos = [
  { nome: "Guaraná", preco: 4.5, tipo: "bebida" },
  { nome: "Macarrão", preco: 4.8, tipo: "comida" },
  { nome: "Leite", preco: 7.9, tipo: "bebida" },
  { nome: "Bolacha", preco: 3.5, tipo: "comida" },
  { nome: "Água Mineral", preco: 1.2, tipo: "bebida" },
  { nome: "Arroz", preco: 12.99, tipo: "comida" },
];

const buscaProdutos = produtos.filter(
  (item) => item.tipo !== "bebida" && item.preco < 10 //buscando produtos diferentes de bebida e com preço menor que 10
);

console.log(buscaProdutos);
