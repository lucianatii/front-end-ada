//ESTRUTURA DE UM ARRAY
const pessoa = ["Luciana", 38, 1.55, "Dev Front-end", true];

console.log(pessoa[3]); //índice 3 me mostra a profissao

pessoa[1] = 27; //alterando o índice 1

console.log(pessoa); //mostrando todos os dados dentro do array pessoa

console.log(pessoa.length); //mostrando quantos elementos existem dentro do array pessoa

console.clear();

//------------------------------------------------------

//MÉTODOS DE ARRAYS

//SLICE (fatia)
const numeros = [10, 15, 20, 25, 30, 35];

console.log(numeros.slice(2, 5)); //start = 2 e end = 5
//mostrando a partir do índice 2(nº 20) até o índice 4(nº 30), já que o limite definido (end) é o índice 5

console.clear();

//------------------------------------------------------

//PUSH (adicionando elementos ao final do array)
const cores = ["azul", "amarelo", "rosa", "roxo"];
cores.push("verde"); //acrescentei 'verde' ao final do meu array

console.log(cores);

console.clear();

//------------------------------------------------------

//UNSHIFT(adicionando elementos no início do array)

const animais = ["gato", "cachorro", "leão", "zebra"];
animais.unshift("girafa"); //acrescentei 'girafa' no início do meu array
console.log(animais);

console.clear();

//------------------------------------------------------

//POP(removendo elemento que está no final do array)
const frutas = ["maçã", "banana", "melancia", "uva"];
frutas.pop(); //remove "uva", que é o último elemento do array
console.log(frutas);

console.clear();

//------------------------------------------------------

//SHIFT (removendo elemento que está no início do array)
const nomes = ["maria", "ana", "erick", "paula"];
nomes.shift(); //remove "maria", que é o primeiro elemento do array
console.log(nomes);

//------------------------------------------------------

//BUSCANDO ELEMENTOS EM UM ARRAY

//INCLUDES = está incluso?
console.log(nomes.includes("luciana")); //'luciana' existe/está incluso dentro do array nomes?. O console retorna false. Caso luciana fosse um dos nomes dentro do array nomes, retornaria true.

if (nomes.includes("luciana")) {
  console.log("O nome luciana existe dentro do array");
} else {
  console.log("Este nome não está incluso neste array");
}

console.clear();

//------------------------------------------------------

//INDEXOF (busca o primeiro elemento que tenha o valor solicitado e retorna o índice desse elemento)

const papeis = ["sulfite", "verge", "cartolina", "laminado"];
console.log(papeis.indexOf("almaço")); //aqui basicamente estou perguntando em qual índice se encontra o papel "almaço". Como ele não existe no array, não há um índice para ele e portanto, o console me retorna o valor -1... que é como se fosse um 'false'. Caso 'almaço' existisse no array, ele me retornaria o número do índice.

console.clear();

//------------------------------------------------------

//LASTINDEXOF (busca o último elemento que tenha o valor solicitado e retorna o índice desse elemento)

const idades = [4, 6, 8, 4, 10, 4]; //o numero 4 se repete algumas vezes mas quero o índice da última vez em que ele aparece
console.log(idades.lastIndexOf(4)); //qual é o índice final do elemento 4 dentro de idades? Recebo como retorno o índice 5.

console.clear();

//------------------------------------------------------

//PERCORRENDO ARRAYS COM FOR

const arr = [12, 26, 100, 47, 64, 90]; //criando a variável e o array

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]); //i aponta o índice, i aponta o numero correspondente a cada índice no array
}

console.clear();

//------------------------------------------------------

//FOR-OF (percorre os elementos do array)
const carros = ["fusca", "gol", "escort", "kadett", "astra", "meriva", "wrv"];

for (const elemento of carros) {
  //percorrendo os elementos do objeto carros
  console.log(elemento); //imprimindo na tela cada um dos elementos
}

console.clear();

//------------------------------------------------------

//FOR-IN (percorre os índices do array e estes índices são strings)
const tecidos = ["seda", "algodão", "crepe", "poliester", "lycra", "jeans"];

for (const indice in tecidos) {
  console.log(indice);
}
