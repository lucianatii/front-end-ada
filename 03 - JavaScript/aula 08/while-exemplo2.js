const prompt = require("readline-sync");

let notaAluno = Number(prompt.question("Informe a nota do aluno: "));

let somaDasNotas = 0; //acumulador

let qtdadeNotas = 0;

while (notaAluno >= 0) {
  somaDasNotas = somaDasNotas + notaAluno; //soma das notas recebe ele mesmo + a proxima nota
  qtdadeNotas = qtdadeNotas + 1; //é incrementada pelo novo valor dela mesma + 1

  //poderia escrever da forma concatenada também, é um jeito de encurtar o código, seria assim:
  //somaDasNotas += notaAluno;
  //qtdadeNotas += qtdadeNotas + 1;

  //OUU.... Quando se quer adicionar apenas mais um item à variavel, como na qtdadeNotas, escreve-se assim:
  //qtdadeNotas++; Chama-se pós incremento

  notaAluno = Number(prompt.question("Informe a próxima nota: "));
}

const mediaAlunos = Number(somaDasNotas / qtdadeNotas);

// console.log("A soma das notas é: " + somaDasNotas);
console.log("A média das notas da sala foi de: " + mediaAlunos);
