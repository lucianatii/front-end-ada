//UTILIZANDO FOREACH
//sintaxe: variavel.forEach (funçao aqui)

const numeros = [10, 40, 58, 77, 62, 14]; //definindo array de numeros

function imprimirElemento(elemento) {
  console.log(elemento);
}

numeros.forEach(imprimirElemento); //foreach encontrará os elementos a serem impressos, dentro  do array numeros

//SERIA O MESMO QUE...

for (const elemento of numeros) {
  console.log(elemento);
}

console.clear();

//---------------------------------------------------------
//OUTRO EXEMPLO, MAIS COMPACTO:

const nums = [50, 80, 74, 15, 33, 97];

nums.forEach((elemento, index, arrayCompleto) => {
  //podem ser adicionados até 3 parâmetros ao forEach. O primeiro diz respeito a cada valor dentro do array, o segundo informa o índice de cada valor e o terceiro traz o array completo
  console.log(index, elemento, arrayCompleto);
});

//---------------------------------------------------------
//UTILIZANDO FIND()

encontre = nums.find((numero) => {
  //encontre dentro do array nums um numero...
  // return numero === 97;
  return numero > 50; //... > que 50
});

console.log(encontre);

console.clear();

//---------------------------------------------------------
//UTILIZANDO FIND() EM UM ARRAY DE OBJETOS

const pessoas = [
  //ARRAY DE OBJETOS
  {
    nome: "Pessoa 1",
    idade: 24,
    altura: 1.85,
  },

  {
    nome: "Pessoa 2",
    idade: 32,
    altura: 1.6,
  },

  {
    nome: "Pessoa 3",
    idade: 7,
    altura: 1.34,
  },
];

pessoaEncontrada = pessoas.find(
  (pessoa) => pessoa.idade < 25 && pessoa.altura < 1.6
);
console.log(pessoaEncontrada);

//---------------------------------------------------------
//UTILIZANDO FINDINDEX()

indiceDaPessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade < 25 && pessoa.altura < 1.6
);
console.log(indiceDaPessoaEncontrada);

//quando find nao encontra o elemento solicitado, retorna undefined
//quando findIndex nao encontra o elemento solicitado, retorna -1
