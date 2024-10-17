//TRABALHANDO COM OBJETOS
//sintaxe: 'nome do objeto = {chave: valor}'

const pessoa = {
  nome: "Luciana",
  idade: 38,
  curso: "Sistemas para Internet",
  hobbies: ["Quebra-cabeças", "Séries de Suspense", "CartolaFC"],
  "animal de estimacao": "Abigal", //posso ter uma chave com espaços desde que esteja entre aspas. As aspas utilizadas podem ser simples ou duplas.

  agoraUmaFuncao: () => {
    console.log("Olar!"); //a sintaxe para chamar essa função é: nome do objeto.chave(), ou seja, pessoa.agoraUmaFuncao()
  },
};

console.log(pessoa.hobbies); //imprimindo na tela apenas os hobbies utilizando o ponto
console.log(pessoa["animal de estimacao"]); //imprimindo na tela apenas o nome do animal utilizando colchetes pq a chave tem espaços

//acrescentando uma propriedade ao objeto:
pessoa.profissao = "Desenvolvedora Front-end";

//alterando uma propriedade do objeto:
pessoa.curso = "Trilha Front-end AdaTech"; //novo valor sobrescreve o valor anterior

//deletando uma propriedade do objeto:
delete pessoa.profissao;

console.log(pessoa);
pessoa.agoraUmaFuncao();

console.clear();

//--------------------------------------------------------

//SINTAXE SIMPLIFICADA PARA CRIAR UMA PROPRIEDADE EM UM OBJETO

const nomeDaPessoa = "Luli"; //defini a variável nome, que poderia estar em qualquer parte do meu código

const objeto = {
  nomeDaPessoa, //acrescentei essa variável ao meu objeto e ele entende que deve utilizar o valor dela aqui
};

console.log(objeto); //mesmo sem ter colocado o valor da chave nome no meu objeto, ele imprime o valor da variável nome

console.clear();

//--------------------------------------------------------

//DESESTRUTURAÇÃO DE OBJETO

const aluna = {
  nome: "Luciana",
  curso: "Sistemas para Internet",
  hobbies: ["Quebra-cabeças", "Séries de Suspense", "CartolaFC"],
};

const { curso, hobbies } = aluna;
console.log(curso);
console.log(hobbies);
console.log(aluna);
